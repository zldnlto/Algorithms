function solution(array) {
  return array.join("").match(/7/g).length;
}

function solution(array) {
  return array.join("").split("7").length - 1;
}
