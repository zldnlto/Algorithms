function solution(my_string) {
  var arr = [...my_string];
  return arr
    .map((v) =>
      v.charCodeAt() > 64 && v.charCodeAt() < 91
        ? v.toLowerCase()
        : v.toUpperCase()
    )
    .join("");
}

function solution(my_string) {
  var arr = [...my_string];
  return arr
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
