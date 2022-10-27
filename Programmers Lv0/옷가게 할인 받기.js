function solution(price) {
  if (price >= 100000 && price < 300000) {
    return parseInt(price * 0.95, 10);
  } else if (price >= 300000 && price < 500000) {
    return parseInt(price * 0.9, 10);
  } else if (price >= 500000) {
    return parseInt(price * 0.8, 0);
  } else {
    return parseInt(price, 0);
  }
}

//정수로 반환이 문제였던것임..
