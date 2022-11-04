function solution(num_list, n) {
  let arr = new Array(num_list.length / n).fill(0).map(() => new Array(n));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = num_list.shift();
    }
  }
  return arr;
}

//num_list 를 slice() 해서 배열 원소로 push하기
function solution(num_list, n) {
  let arr = new Array(num_list.length / n).fill(0).map(() => new Array(n));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = num_list.slice(i * n, i * n + n);
  }
  return arr;
}

//참으로 간결하다

function solution(num_list, n) {
  var answer = [];
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}
