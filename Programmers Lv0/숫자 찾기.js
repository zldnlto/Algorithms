function solution(num, k) {
  let temp = num + "";
  return [...temp].includes(k + "") ? [...temp].indexOf(k + "") + 1 : -1;
}
