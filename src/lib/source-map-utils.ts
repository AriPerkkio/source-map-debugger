import type { SourceMapMappings } from '@jridgewell/sourcemap-codec';

export type Position = { line?: number; column?: number };
export type PositionWithType = Required<Position> & { type: keyof Locations[number] };
export type Location = { start: Required<Position>; end?: Position };
export type Locations = { generated: Location; source: Location }[];

export function decodedMappingsToLocations(decodedMappings: SourceMapMappings): Locations {
	const locations: Locations = [];

	for (const [generatedRowIndex, mappings] of decodedMappings.entries()) {
		const mappingPairs = mappings.reduce<SourceMapMappings>((all, current, index) => {
			const pairIndex = Math.floor(index / 2);
			const entry = all[pairIndex] || [];
			entry.push(current);
			all[pairIndex] = entry;

			return all;
		}, []);

		for (const [start, end] of mappingPairs) {
			locations.push({
				generated: {
					start: { line: 1 + generatedRowIndex, column: start[0] },
					end: end ? { line: 1 + generatedRowIndex, column: end[0] } : undefined
				},
				source: {
					start: { line: 1 + (start[2] || 0), column: start[3] || 0 },
					end: end ? { line: end[2] ? end[2] + 1 : undefined, column: end[3] } : undefined
				}
			});
		}
	}

	return locations;
}

type MapLike = {
	get: (index: number) => boolean | undefined;
	set: (key: number, value: boolean) => unknown;
};
type LineMap = Map<number, MapLike>;

const WHOLE_ROW: MapLike = { get: () => true, set: () => undefined };

export function locationsToMap(locations: Location[]): LineMap {
	const map: LineMap = new Map();

	for (const { start, end } of locations) {
		const lines = 1 + Math.abs(start.line - (end?.line || start.line));

		for (const [lineOffset] of Array(lines).fill(null).entries()) {
			const line = start.line + lineOffset;
			const columnMap = map.get(line) || new Map<number, boolean>();

			if (end?.line !== start.line) {
				map.set(line, WHOLE_ROW);
				continue;
			}

			const columns = Math.abs(start.column - (end.column || 0));

			for (const [columnOffset] of Array(columns).fill(null).entries()) {
				const column = start.column + columnOffset;
				columnMap.set(column, true);
			}

			map.set(line, columnMap);
		}
	}

	return map;
}

export function findLocations(
	position: PositionWithType | undefined,
	locations: Locations
): Locations {
	if (!position) return [];

	const locationsMatchingPosition = locations.filter((location) =>
		locationMatchesPosition(location[position.type], position)
	);

	return sortByClosestLocation(locationsMatchingPosition, position);
}

function locationMatchesPosition({ start, end }: Location, position: Required<Position>) {
	const lineMatch = start.line <= position.line && (!end?.line || position.line <= end.line);

	// When position is multiline, the columns do not matter
	if (end?.line && start.line !== end.line) {
		return lineMatch;
	}

	const columnMatch =
		start.column <= position.column && (!end?.column || position.column <= end.column);

	return lineMatch && columnMatch;
}

function sortByClosestLocation(_locations: Locations, position: PositionWithType): Locations {
	const locations = _locations.concat();

	locations.sort((a, b) => {
		const lineDiffA = Math.abs(position.line - lineAverage(a[position.type]));
		const lineDiffB = Math.abs(position.line - lineAverage(b[position.type]));

		if (lineDiffA === lineDiffB) {
			const columnDiffA = Math.abs(position.column - columnAverage(a[position.type]));
			const columnDiffB = Math.abs(position.column - columnAverage(b[position.type]));

			return columnDiffA - columnDiffB;
		}

		return lineDiffA - lineDiffB;
	});

	// Return only identical locations
	const closestLocation = locations[0]?.[position.type];

	return locations.filter((location) =>
		isLocationInsideAnother(closestLocation, location[position.type])
	);
}

function lineAverage({ start, end }: Location) {
	return (start.line + (end?.line || start.line)) / 2;
}
function columnAverage({ start, end }: Location) {
	return (start.column + (end?.column || start.column)) / 2;
}

function isLocationInsideAnother(base: Location, compared: Location) {
	const startMatches =
		base.start.line <= compared.start.line && base.start.column <= compared.start.column;

	if (!base.end || !compared.end) return startMatches;

	const endMatches =
		// @ts-expect-error -- Comparing numbers to undefined. False is expected on type mismatch.
		base.end.line >= compared.end.line && base.end.column >= compared.end.column;

	return startMatches && endMatches;
}
