<script context="module" lang="ts">
	import { decode, encode } from '@jridgewell/sourcemap-codec';

	import CodeArea, { type PositionSelectEvent } from '$lib/CodeArea';
	import Tools from './Tools.svelte';
	import { decodedMappingsToLocations, findLocations, type Locations } from '$lib/source-map-utils';
	import { initializeFromUrlSearchParams } from '$lib/urlSearchParameters.svelte';

	interface SelectedPosition extends PositionSelectEvent {
		type: keyof Locations[number];
	}
</script>

<script lang="ts">
	let { map, generated } = initializeFromUrlSearchParams();

	$: decodedMappings = decode(map.mappings);
	$: locations = decodedMappingsToLocations(decodedMappings);
	$: sources = map.sourcesContent[0] || 'No sources';
	$: wordWrap = false;
	$: selectedPosition = undefined as SelectedPosition | undefined;
	$: selectedLocations = findLocations(selectedPosition, locations);
	$: gridSize = 25;
</script>

<svelte:window on:click={() => (selectedPosition = undefined)} />

<div class="grid" style={`--gridSize: ${gridSize}rem; white-space: pre${wordWrap ? '-wrap' : ''};`}>
	<header>
		<h1>Source Map Debugger</h1>
		<p>
			Debug and modify source maps. Load the example from the top right tools or paste your own
			source map and generated code into editors.
		</p>
	</header>

	<div class="tools">
		<Tools bind:map bind:wordWrap bind:generated bind:gridSize />
	</div>

	<div class="map">
		<CodeArea contenteditable value={map} on:change={(event) => (map = event.detail)}>
			<h2>Source Map</h2>
		</CodeArea>
	</div>

	<div class="mappings">
		<CodeArea
			contenteditable
			value={decodedMappings}
			selectedLocations={selectedLocations.map((location) => ({
				start: { line: location.generated.start.line, column: 1 },
				end: { line: location.generated.start.line, column: 99 }
			}))}
			on:change={(event) => (map.mappings = encode(event.detail))}
		>
			<h2>Mappings</h2>
		</CodeArea>
	</div>

	<div class="sources">
		<CodeArea
			value={sources}
			highlightLocations={locations.map((location) => location.source)}
			selectedLocations={selectedLocations.map((location) => location.source)}
			on:position-select={(event) => (selectedPosition = { type: 'source', ...event.detail })}
		>
			<h2>Sources</h2>
		</CodeArea>
	</div>

	<div class="generated">
		<CodeArea
			contenteditable
			value={generated}
			on:change={(event) => (generated = event.detail)}
			highlightLocations={locations.map((location) => location.generated)}
			selectedLocations={selectedLocations.map((location) => location.generated)}
			on:position-select={(event) => (selectedPosition = { type: 'generated', ...event.detail })}
		>
			<h2>Generated</h2>
		</CodeArea>
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(8, minmax(1rem, 1fr));
		grid-auto-rows: min-content minmax(1rem, var(--gridSize)) minmax(1rem, 1fr);
		height: 100%;
		padding: 2rem;
		gap: 2rem;
	}

	header {
		white-space: normal;
		grid-column: 1 / 6;

		h1 {
			font-size: 3.5rem;
		}

		p {
			font-size: 1.5rem;
			margin: 1rem 0;
		}
	}

	.tools {
		grid-column: 6 / 9;
		justify-self: flex-end;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.map {
		grid-column: 1 / 6;
	}

	.mappings {
		grid-column: 6 / 9;
	}

	.sources {
		grid-column: 1 / 5;
	}

	.generated {
		grid-column: 5 / 9;
	}

	.grid {
		@media (max-width: 42.5rem) {
			grid-auto-rows: min-content auto;
			gap: 1rem;

			& > * {
				grid-column: 1 / 9;
				max-height: 50vh;
			}

			header {
				grid-column: 1 / 5;
				h1 {
					font-size: 2.5rem;
				}
			}
			.tools {
				grid-column: 5 / 9;
			}
		}
	}
</style>
