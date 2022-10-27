function solution(n) {
  let pieces = 6;
  for (let pizza = 1; pizza <= n * pieces; pizza++) {
    if ((pizza * pieces) % n === 0) return pizza;
  }
}
