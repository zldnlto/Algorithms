function solution(my_string) {
  return [...my_string]
    .filter((n) => !isNaN(n))
    .map((n) => +n)
    .sort((a, b) => a - b);
}
