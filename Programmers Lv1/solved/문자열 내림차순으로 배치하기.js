function solution(s) {
  let strArr = s.split("");
  let temp = strArr.map((n) => n.charCodeAt()).sort((a, b) => b - a);
  return temp.map((n) => String.fromCodePoint(n)).join("");
}
