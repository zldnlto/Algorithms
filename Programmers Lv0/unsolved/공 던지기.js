function solution(numbers, k) {
  //배열이 짝수면 홀수번호만 반복해서 던짐
  let temp = numbers.length;
  if (numbers.length % 2 === 0) {
    return temp - 1;
  } else {
    return numbers[k % temp];
  }
}
