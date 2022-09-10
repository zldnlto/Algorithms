function solution(n) {
  let arr = [];
  let answer = 0;
  for (let x = 0; x <= n; x++) {
    if (n % x === 0) arr.push(x);
  }
  arr.forEach((n) => (answer += n));
  return answer;
}

//왜 굳이 배열을 만들었을까 ㄱ- 어렵게 생각하지 말 것

function solution(n) {
  let answer = 0;
  for (let x = 1; x <= n; x++) {
    if (n % x === 0) answer += x;
  }
  return answer;
}
