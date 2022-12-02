function solution(array, n) {
  array.sort((a, b) => a - b);
  var distance = array.map((v) => Math.abs(v - n));
  var temp = Math.min(...distance);

  return array[distance.indexOf(temp)];
}
