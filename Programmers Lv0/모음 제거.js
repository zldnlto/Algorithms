function solution(my_string) {
  let aeiou = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((n) => !!aeiou.includes(n) === false).join("");
}

//정규표현식 풀이.. 대박

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// ![array].includes(t) 라는 표기를 잊고 있었음
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}
