function solution(rsp) {
  var arr = [...rsp];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") {
      arr[i] = "0";
    } else if (arr[i] === "5") {
      arr[i] = "2";
    } else if (arr[i] === "0") {
      arr[i] = "5";
    }
  }
  return arr.join("");
}

//삼항연산자 이용
function solution(rsp) {
  return rsp
    .split("")
    .map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
    .join("");
}
