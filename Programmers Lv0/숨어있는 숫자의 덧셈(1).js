function solution(my_string) {
  let numberArr = my_string
    .split("")
    .filter((n) => n == +n)
    .map((n) => +n);
  return numberArr.reduce((acc, cur) => acc + cur, 0);
}

// 다른 사람의 풀이 - 정규식 이용

function solution(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}
