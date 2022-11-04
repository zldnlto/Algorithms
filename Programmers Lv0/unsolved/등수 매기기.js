function solution(score) {
  score.map((v) => (v[0] + v[1]) / 2); //평균의 배열

  //등수를 얻어내기 ??
  //동점 처리
}

//이건 응급도에 쓰일 듯

let avg = score.map((v) => (v[0] + v[1]) / 2);
let temp = avg.sort((a, b) => a - b);
avg.map((v) => (v = temp.indexOf(v) + 1));

//Array.from({length:n}, ()=>1) 는 length가 n인 배열을 만들고, 그 배열의 값들을 1로 초기화 해주겠다는 뜻

function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
}
