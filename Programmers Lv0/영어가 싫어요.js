function solution(numbers) {
  const numbersObj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  for (number in numbersObj) {
    numbers = numbers.split(numbersObj[number]).join(number);
  }
  return +numbers;
}
