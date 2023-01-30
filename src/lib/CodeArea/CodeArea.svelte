<script context="module" lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { locationsToMap, type Location } from '$lib/source-map-utils';

	export interface PositionSelectEvent {
		line: number;
		column: number;
	}

	const DIGIT_NEWLINE_PATTERN = /\s*(\d+)\s*/g;
	const EOL_PATTERN = /(?:\r?\n)|\r/g;
	const LINE_WHITE_SPACE_PATTERN = /^\s+/gm;
	const ARRAY_INDENT_PATTERN = /(\[)\s*(\[)/g;
	const ARRAY_INDENT_PATTERN_2 = /(\],)\s*(\[\d)/g;
	const ARRAY_INDENT_PATTERN_3 = /(\])\s*(\])/g;

	const LINE_COUNT_TEMPLATE = (_: TemplateStringsArray, lines: { length: number }) =>
		`--line-count: ${lines.length.toString().length}ch`;

	function normalizeValue(value: string | object): string {
		const serialized = typeof value === 'object' ? JSON.stringify(value, null, 2) : value;

		if (Array.isArray(value)) {
			return serialized
				.replace(DIGIT_NEWLINE_PATTERN, '$1')
				.replace(LINE_WHITE_SPACE_PATTERN, '  ')
				.replace(ARRAY_INDENT_PATTERN, '$1 $2')
				.replace(ARRAY_INDENT_PATTERN_2, '$1 $2')
				.replace(ARRAY_INDENT_PATTERN_3, '$1 $2');
		}

		return serialized || '';
	}

	// Line numbers have to be manually updated when new row is added by contenteditable
	function updateLineNumber(scope: HTMLElement) {
		const lines = scope.querySelectorAll('div[data-line]');
		const lineCount = LINE_COUNT_TEMPLATE`${lines}`;

		for (const [index, line] of Array.from(lines).entries()) {
			line.setAttribute('data-line', (1 + index).toString());
			line.setAttribute('style', lineCount);
		}
	}
</script>

<script lang="ts">
	export let value: string | object = '\n '.repeat(10);
	export let contenteditable = false;
	export let highlightLocations: Location[] = [];
	export let selectedLocations: Location[] = [];
	let editor: HTMLElement;

	const dispatch = createEventDispatcher();
	$: controlledValue = '' as typeof value;
	$: rows = normalizeValue(contenteditable ? controlledValue : value).split(EOL_PATTERN);
	$: highlightMap = locationsToMap(highlightLocations);
	$: selectionMap = locationsToMap(selectedLocations);
	$: focused = false;
	$: reset = false; // Helps Svelte's compatibility with contenteditable

	$: if (!focused) {
		reset = !reset;
		controlledValue = value;
	}

	$: if (!focused && selectionMap.size > 0) {
		setTimeout(() => {
			const selectedRow = editor?.querySelector('span.selected' as 'span');

			if (selectedRow) {
				// scrollTop instead of scrollIntoView as there are multiple editors scrolling simultaneously
				editor.scrollTo({
					top: selectedRow.offsetTop - 30,
					behavior: 'smooth'
				});
			}
		}, 250);
	}

	onMount(() => {
		controlledValue = value;
	});

	function onInput() {
		const lines = editor.querySelectorAll('div[data-line]');
		const updatedValue = Array.from(lines)
			.map((line) => line.textContent?.split(EOL_PATTERN))
			.flat()
			.join('\n');

		value = typeof value === 'object' ? JSON.parse(updatedValue) : updatedValue;
		dispatch('change', value);

		updateLineNumber(editor);
	}

	function onPositionSelect(event: Event, position: PositionSelectEvent) {
		const canSelect = highlightMap.get(position.line)?.get(position.column);

		if (canSelect) {
			event.stopPropagation();
			dispatch('position-select', position);
		}
	}
</script>

<div class="code-area">
	<slot />

	{#key reset}
		<code
			{contenteditable}
			bind:this={editor}
			spellcheck="false"
			autocorrect="off"
			autocapitalize="off"
			translate="no"
			role="textbox"
			aria-multiline="true"
			aria-autocomplete="list"
			on:input={onInput}
			on:focus={() => (focused = true)}
			on:blur={() => (focused = false)}
		>
			{#each rows as row, line}
				<div
					class="row"
					class:selected={selectionMap.get(1 + line)}
					data-line={1 + line}
					style={LINE_COUNT_TEMPLATE`${rows}`}
				>
					{#each row.split('') as character, column}
						<!-- svelte-ignore a11y-click-events-have-key-events -- not possible as contenteditable handles key events -->
						<span
							data-line={1 + line}
							data-column={column}
							title={`${1 + line}:${column}`}
							class="column"
							class:highlight={highlightMap.get(1 + line)?.get(column)}
							class:selected={selectionMap.get(1 + line)?.get(column)}
							on:click={(event) => onPositionSelect(event, { line: 1 + line, column })}
							>{character}</span
						>
					{/each}
				</div>
			{/each}
		</code>
	{/key}
</div>

<style lang="scss">
	.code-area {
		--highlight: rgba(255, 40, 50, 0.45);

		display: flex;
		height: 100%;
		flex-direction: column;
	}

	code {
		font-family: inherit;
		font-size: 1.5rem;
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		white-space: inherit;
		overflow: auto;
		padding: 1rem;
		border: 1px dashed var(--light-blue);
		caret-color: var(--mint);
	}

	.row::before {
		content: attr(data-line);
		display: inline-block;
		color: var(--yellow);
		text-align: end;
		height: 1.5rem;
		width: var(--line-count);
		border-right: 0.15rem solid var(--light-blue);
		margin-right: 0.5rem;
		padding-right: 0.5rem;
	}

	.highlight.column {
		cursor: pointer;
		background-color: var(--highlight);
	}

	.row.selected {
		@mixin border($position, $size: 0.3rem) {
			border-#{$position}: $size dashed var(--mint);
			margin-#{$position}: -$size * 2;
			padding-#{$position}: $size;
		}

		box-sizing: content-box;
		display: inline-block;
		@include border('left');
		@include border('right');
		@include border('top');

		// All but first
		& + & {
			@include border('top', 0);
		}

		// Last row
		&:not(:has(+ .selected)) {
			@include border(('bottom'));
		}
	}

	.column.selected {
		background-color: var(--yellow);
		color: var(--off-blue);
	}
</style>
