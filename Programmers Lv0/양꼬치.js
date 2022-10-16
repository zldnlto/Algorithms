function solution(n, k) {
  let sum = n * 12000 + k * 2000;
  if (n >= 10) {
    return sum - Math.floor(n / 10) * 2000;
  }
}
//정확성 85.7

function solution(n, k) {
  if (n >= 10) {
    return n * 12000 + (k - Math.floor(n / 10)) * 2000;
  } else {
    return n * 12000 + k * 2000;
  }
}
