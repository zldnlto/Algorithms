function solution(n) {
  let sum = 0;
  while (n > 0) {
    sum += Math.floor(n) % 10; //한자리씩 떼줌
    n /= 10; // 다음 자릿수 넘어감
  }
  return sum;
}
