function solution(order) {
  let temp = order + "";
  return [...temp].filter((n) => n == 3 || n == 6 || n == 9).length;
}
