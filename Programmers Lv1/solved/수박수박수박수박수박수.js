function solution(n) {
  let a = "수";
  let b = "박";
  return n % 2 === 0 ? (a + b).repeat(n / 2) : (a + b).repeat(n / 2) + a;
}
