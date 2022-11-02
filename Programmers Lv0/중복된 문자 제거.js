function solution(my_string) {
  let answer = new Set(my_string);
  return [...answer].join("");
}

//그냥 한 줄로

function solution(my_string) {
  return [...new Set(my_string)].join("");
}
