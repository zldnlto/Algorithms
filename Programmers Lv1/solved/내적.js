function solution(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] * b[i]);
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// 해설

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

//reduce가 어차피 순회하니까 굳이 for문을 쓸 필요는 없었던 듯하다.
