function solution(n) {
  let temp = n + ""; //"118372"
  return parseInt(
    temp
      .split("")
      .map((n) => +n)
      .sort((a, b) => b - a)
      .join()
      .replaceAll(",", ""),
    10
  );
}

//정규표현식 써보기
function solution(n) {
  let temp = n + ""; //"118372"
  return parseInt(
    temp
      .split("")
      .map((n) => +n)
      .sort((a, b) => b - a)
      .join()
      .replace(/,/g, ""),
    10
  );
}
