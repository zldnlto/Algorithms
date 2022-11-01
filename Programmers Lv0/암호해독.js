function solution(cipher, code) {
  var answer = "";
  answer += cipher[code - 1];
  for (let i = code; i < cipher.length; i++) {
    if (i % code === code - 1) {
      answer += cipher[i];
    }
  }
  return answer;
}

// 막혔던 부분 - let에서 i 조건 컨트롤

function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
