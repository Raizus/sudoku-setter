type RegionDims = { w: number; h: number };

interface GridSizes {
  [Key: number]: RegionDims;
}

const gridSizes: GridSizes = {
  3: { w: 3, h: 1 },
  4: { w: 2, h: 2 },
  5: { w: 5, h: 1 },
  6: { w: 3, h: 2 },
  7: { w: 7, h: 1 },
  8: { w: 4, h: 2 },
  9: { w: 3, h: 3 },
  10: { w: 5, h: 2 },
  11: { w: 11, h: 1 },
  12: { w: 4, h: 3 },
  13: { w: 13, h: 1 },
  14: { w: 7, h: 2 },
  15: { w: 5, h: 3 },
  16: { w: 4, h: 4 },
};

function getRegionSize(size: number): RegionDims | null {
  if (size in gridSizes) {
    return gridSizes[size];
  }
  return null;
}

export function getRegionIndex(
  row: number,
  col: number,
  size: number
): number | null {
  const region_dims = getRegionSize(size);
  if (region_dims !== null) {
    const [region_h, region_w] = [region_dims.h, region_dims.w];
    return (
      Math.floor(row / region_h) * region_h + Math.floor(col / region_w)
    );
  }
  return null;
}
