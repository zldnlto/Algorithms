function solution(my_str, n) {
  let arr = [];
  let count = Math.ceil(my_str.length / n);
  for (let i = 0; i < count; i++) {
    arr.push(my_str.slice(i * n, i * n + n));
  }
  return arr;
}
