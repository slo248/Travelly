export type Point = {
  x: number;
  y: number;
};

export type CurveFunc = (x: number) => number;

export const getPath = (w: number, h: number): [number, string, CurveFunc] => {
  const a = h * (2 / w) ** 2;
  const f = (x: number): number => {
    'worklet';
    return a * x ** 2;
  };
  const points: Point[] = [];
  for (let x = 0; x <= w; x++) points.push({ x, y: f(x - w / 2) });
  return [
    a,
    points.reduce((acc, point, i) => {
      const prefix = i === 0 ? 'M' : 'L';
      return `${acc} ${prefix}${point.x} ${point.y}`;
    }, ''),
    f
  ];
};
