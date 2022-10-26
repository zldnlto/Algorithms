//이게 조금 더 성능이 좋다
function solution(numbers) {
  let max1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max1), 1);
  let max2 = Math.max(...numbers);
  return max1 * max2;
}

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers.pop() * numbers.pop();
}
