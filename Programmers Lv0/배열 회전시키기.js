function solution(numbers, direction) {
  let temp = 0;
  if (direction === "right") {
    temp = numbers.pop();
    numbers.unshift(temp);
  } else {
    temp = numbers.shift();
    numbers.push(temp);
  }
  return numbers;
}
