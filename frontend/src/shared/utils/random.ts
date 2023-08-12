export function random(min: number, max?: number): number {
  if (max && min >= max) {
    throw new Error("Min value must be smaller than max value");
  }

  const randomNumber = max
    ? Math.random() * (max - min) + min
    : Math.random() * min;
  return Math.floor(randomNumber);
}

console.log(random(0, 5));
