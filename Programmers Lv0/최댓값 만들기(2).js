function solution(numbers) {
  let positive = numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, cur) => acc * cur, 1);

  if (numbers.filter((v) => v < 0).length === 1) {
    return positive;
  }

  let negative = numbers
    .filter((v) => v < 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, cur) => acc * cur, 1);

  return positive > negative ? positive : negative;
}
