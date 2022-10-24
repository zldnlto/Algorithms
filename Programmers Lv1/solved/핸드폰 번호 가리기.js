// 핸드폰 번호 가리기
//1
function solution(phone_number) {
  let answer = "";
  arr = phone_number.split("");
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "*";
  }
  answer = arr.join("");
  return answer;
}

//2
function solution(phone_number) {
  const arr = phone_number.split("");
  const temp = arr.splice(-4);
  const answer = [...arr.fill("*"), ...temp].join("");
  return answer;
}

//추가 공부 코드
//3 reduce
function solution(phone_number) {
  return phone_number
    .split("")
    .reduce(
      (acc, curr, index) =>
        index < phone_number.length - 4 ? acc + "*" : acc + curr,
      ""
    );
}

//4 map 이용해보기
function solution(phone_number) {
  return phone_number
    .split("")
    .map((number, index) => (index < phone_number.length - 4 ? "*" : number))
    .join("");
}

//map 이나 reduce에 조건 박아서 하면 되잖아...헐
//map이랑 reduce 어려워 할 게 아니라 더 공부해서 잘 쓸 수 있도록
