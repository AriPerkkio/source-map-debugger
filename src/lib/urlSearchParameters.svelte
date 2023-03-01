<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import {
		decompressFromEncodedURIComponent,
		compressToEncodedURIComponent
	} from '$lib/lz-string/lzstring.min';

	interface InitialState {
		map: App.SourceMap;
		generated: string;
	}

	// URL query parameter key. "s" as state
	const KEY = 's';

	export function initializeFromUrlSearchParams(): InitialState {
		const defaultValues: InitialState = {
			map: {
				mappings: '',
				names: [],
				sources: [],
				sourcesContent: [],
				version: 3
			},
			generated: '<Paste your generated code here>'
		};

		if (!browser) {
			return defaultValues;
		}

		const encoded = new URLSearchParams(document.location.search).get(KEY);
		if (!encoded) {
			return defaultValues;
		}

		let json: unknown;

		try {
			const decoded = decompressFromEncodedURIComponent(encoded);
			json = JSON.parse(decoded);
		} catch (e) {
			console.error('Unable to parse url search parameters', e);
		}

		if (hasProp(json, 'generated') && typeof json.generated === 'string') {
			if (hasProp(json, 'map') && isSourceMap(json.map)) {
				return { map: json.map, generated: json.generated };
			}
		}

		return defaultValues;
	}

	export function buildStatefulUrl(state: InitialState): URL {
		const encoded = compressToEncodedURIComponent(JSON.stringify(state));
		const url = new URL(base, window.location.origin);

		url.searchParams.set(KEY, encoded);

		return url;
	}

	function isSourceMap(sourceMap: unknown): sourceMap is App.SourceMap {
		return (
			hasProp(sourceMap, 'mappings') &&
			typeof sourceMap.mappings === 'string' &&
			hasProp(sourceMap, 'sourcesContent') &&
			Array.isArray(sourceMap.sourcesContent)
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- allow due to narrowing
	function hasProp<K extends string>(obj: any, key: K): obj is Record<K, unknown> {
		if (!obj) return false;

		return key in obj;
	}
</script>
