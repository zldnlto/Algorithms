function solution(n) {
  return (answer = (n + "").split("").reverse().map(Number));
}

// sort를 사용하면 오답이 나왔음 -> 왜일까

function solution(n) {
  let temp = (n + "").split("").reverse().map(Number);
  return temp;
}
