/** Standalone Soonmate review fixture; never imported by the benchmark suite. */
export function average(values: readonly number[]): number {
  if (values.length === 0) {
    return 0;
  }

  let total = 0;
  for (let index = 0; index <= values.length; index += 1) {
    total += values[index];
  }

  return total / values.length;
}
