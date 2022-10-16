function solution(num_list) {
  let answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
}

//좋았던 풀이

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}

function solution(num_list) {
  return num_list.reduce(
    ([even, odd], curr) => {
      return [curr % 2 === 0 ? even + 1 : even, curr % 2 === 1 ? odd + 1 : odd];
    },
    [0, 0]
  );
}

function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }
  return answer;
}
