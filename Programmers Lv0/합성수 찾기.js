function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % 2 === 0) return false;
  }
  return true;
}

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    isPrime(i) ? count : count++;
  }
  return count;
}
