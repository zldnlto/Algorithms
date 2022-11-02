function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function solution(n) {
  let answer = 0;
  while (factorial(answer) <= n) {
    answer++;
  }
  return answer - 1;
}
