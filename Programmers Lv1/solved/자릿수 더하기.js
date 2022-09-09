function solution(n) {
  const nString = n + ""; //문자열화
  const nArray = nString.split("").map(Number);
  return nArray.reduce((acc, cur) => acc + cur, 0);
}

//다른 사람의 풀이 - 한줄로

function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
