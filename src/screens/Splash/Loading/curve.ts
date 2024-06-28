export type Point = {
  x: number;
  y: number;
};

export const getPoints = (w: number, h: number): Point[] => {
  const a = h * (2 / w) ** 2;
  const f = (x: number) => a * x ** 2;
  const points: Point[] = [];
  for (let x = 0; x <= w; x++) points.push({ x, y: f(x - w / 2) });
  return points;
};

export const getPath = (points: Point[]): string => {
  return points.reduce((acc, point, i) => {
    const prefix = i === 0 ? 'M' : 'L';
    return `${acc} ${prefix}${point.x} ${point.y}`;
  }, '');
};
