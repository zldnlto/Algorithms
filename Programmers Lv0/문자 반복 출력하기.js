function solution(my_string, n) {
  let arr = my_string.split("");
  return arr.map((v) => v.repeat(n)).join("");
}

//스프레드 문법 활용하기
function solution(my_string, n) {
  return [...my_string].map((v) => v.repeat(n)).join("");
}
