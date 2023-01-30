import type { SourceMapMappings } from '@jridgewell/sourcemap-codec';

export type Position = { line?: number; column?: number };
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

type ColumnMap = Map<number, boolean>;
type LineMap = Map<number, ColumnMap>;

export function locationsToMap(locations: Location[]): LineMap {
	const map: LineMap = new Map();

	for (const { start, end } of locations) {
		const lines = Math.abs(1 + start.line - (end?.line || start.line));

		for (const [lineOffset] of Array(lines).fill(null).entries()) {
			const line = start.line + lineOffset;
			const columnMap = map.get(line) || new Map<number, boolean>();

			const endColumn = end?.line === start.line ? end.column : 0;
			const columns = Math.abs(start.column - (endColumn || 0));

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
	position: (Required<Position> & { type: keyof Locations[number] }) | undefined,
	locations: Locations
): Locations {
	if (!position) return [];

	return locations.filter((location) => locationMatchesPosition(location[position.type], position));
}

function locationMatchesPosition({ start, end }: Location, position: Required<Position>) {
	const lineMatch = start.line <= position.line && (!end?.line || position.line <= end.line);
	const columnMatch =
		start.column <= position.column && (!end?.column || position.column <= end.column);

	return lineMatch && columnMatch;
}
