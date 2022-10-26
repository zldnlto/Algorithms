function solution(n) {
  var pieces = 6;
  for (let pizza = 1; pizza <= n * 6; pizza++) {
    if ((pizza * pieces) % n === 0) return pizza;
  }
}
