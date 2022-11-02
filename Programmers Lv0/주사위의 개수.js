function solution(box, n) {
  let count = 1;
  for (let i = 0; i < box.length; i++) {
    count *= Math.floor(box[i] / n);
  }
  return count;
}

// 반복문 없이 구조분해할당으로 가능

function solution(box, n) {
  let [width, length, height] = box;
  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}
