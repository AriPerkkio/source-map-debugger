<script context="module" lang="ts">
	import { decode, encode, type SourceMapSegment } from '@jridgewell/sourcemap-codec';

	import Plus from '$lib/img/plus.svg?component';
	import Minus from '$lib/img/minus.svg?component';
	import Checked from '$lib/img/checked.svg?component';
	import Reload from '$lib/img/reload.svg?component';
	import Share from '$lib/img/share.svg?component';
	import Github from '$lib/img/github.svg?component';
	import { buildStatefulUrl } from '$lib/urlSearchParameters.svelte';
	import { testSourceMap, testGenerated } from '$lib/static-data';

	function addOffset(offset: number) {
		return (lineMapping: SourceMapSegment) => {
			if (lineMapping.length < 4) return lineMapping;

			const lineIndex = lineMapping.length - 2;
			const copy = [...lineMapping] as typeof lineMapping;
			copy.splice(lineIndex, 1, copy[lineIndex] + offset);

			return copy;
		};
	}
</script>

<script lang="ts">
	export let map: App.SourceMap;
	export let generated: string;
	export let wordWrap: boolean;
	export let gridSize: number;
	let exportUrl: string | undefined = '';

	function onLineOffsetChange(offset: 1 | -1) {
		const mappingsWithOffset = decode(map.mappings).map((mapping) =>
			mapping.map(addOffset(offset))
		);

		if (offset === 1) {
			mappingsWithOffset.unshift([]);
		} else {
			mappingsWithOffset.shift();
		}

		map.mappings = encode(mappingsWithOffset);
	}

	function onShare() {
		const url = buildStatefulUrl({ generated, map });

		// Update window's URL with export URL
		window.history.pushState({}, '', url);
		exportUrl = url.toString();

		navigator.clipboard.writeText(exportUrl).then(() => {
			// Removes "Copied" text from screen after a delay
			setTimeout(() => {
				exportUrl = '';
			}, 3000);
		});
	}
</script>

<div role="region" aria-label="Tools" class="tools" class:dim={exportUrl}>
	<div class="flex-center">
		<span>Github:</span>
		<a href="https://github.com/ariperkkio/source-map-debugger/">
			<Github aria-hidden="true" />
		</a>
	</div>

	<div class="flex-center">
		<span>Try example:</span>
		<button
			title="Load example"
			on:click={() => ((map = testSourceMap), (generated = testGenerated))}
		>
			<Reload aria-hidden="true" />
		</button>
	</div>

	<div class="flex-center url-share">
		<span>Share URL:</span>
		<button title="Generate URL of current state" on:click={onShare}>
			<Share aria-hidden="true" />
		</button>

		<div aria-live="polite">
			{#if exportUrl}
				<div class="url-share-popup">URL copied to clipboard!</div>
			{/if}
		</div>
	</div>

	<div>
		<label for="word-wrap">
			Word Wrap:
			<input id="word-wrap" type="checkbox" bind:checked={wordWrap} />
			<Checked aria-hidden="true" />
		</label>
	</div>

	<div class="flex-center grid-size" role="group" aria-labelledby="grid-size-title">
		<span id="grid-size-title">Grid size:</span>

		<button title="Increase first row size" on:click={() => (gridSize = gridSize + 5)}>
			<Plus aria-hidden="true" />
		</button>

		<button
			title="Decrease first row size"
			on:click={() => (gridSize = Math.max(10, gridSize - 5))}
		>
			<Minus aria-hidden="true" />
		</button>
	</div>

	<div class="flex-center" role="group" aria-labelledby="line-offset-title">
		<span id="line-offset-title">Line Offset:</span>

		<button title="Increase line offset" on:click={() => onLineOffsetChange(1)}>
			<Plus aria-hidden="true" />
		</button>

		<button title="Decrease line offset" on:click={() => onLineOffsetChange(-1)}>
			<Minus aria-hidden="true" />
		</button>
	</div>
</div>

<style lang="scss">
	$border-size: 0.3rem;

	.tools {
		white-space: normal;
		font-size: 1.5rem;

		&.dim :global(*:not(.url-share-popup)) {
			color: var(--yellow-dim);
			fill: var(--yellow-dim);
			border: 0;
			outline: 0;
		}

		& > *:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	:global(svg) {
		height: 100%;
		fill: var(--yellow);
	}

	// Hide the input visually, use svg next to it as checkbox indicator
	input#word-wrap {
		height: 1px;
		width: 1px;
		margin: 0;
		padding: 0;
		overflow: hidden;
		margin-top: -1px;

		&:focus {
			outline: 0;

			& ~ :global(svg) {
				box-sizing: content-box;
				border: $border-size dashed var(--mint);
				padding: $border-size;
				margin: -$border-size;
				margin-left: 0.2rem;
			}
		}

		&:not(:checked) ~ :global(svg path.check-mark) {
			display: none;
		}
	}

	label {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 1.5rem;

		:global(svg) {
			margin-left: 0.75rem;
		}
	}

	.url-share {
		position: relative;

		&-popup {
			position: absolute;
			top: 2rem;
			left: -1rem;
			border: 0.2rem dashed var(--yellow);
			padding: 0.5rem 1rem;
			color: var(--yellow);
			background-color: var(--off-blue);
		}
	}

	.flex-center {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	button,
	a {
		cursor: pointer;
		display: inline-flex;
		justify-content: flex-end;
		background-color: transparent;
		margin: 0;
		padding: 0;
		border: 0;
		height: 1.5rem;
		margin-left: 0.75rem;

		&:focus {
			outline: $border-size dashed var(--mint);
			outline-offset: $border-size;
		}
	}

	a,
	button,
	label :global(svg) {
		&:hover {
			transform: scale(1.2);
		}
		&:active {
			transform: scale(0.8);
		}
	}

	@media (max-width: 42.5rem) {
		.grid-size {
			display: none;
		}
	}
</style>
