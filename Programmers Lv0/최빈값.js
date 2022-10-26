function solution(array) {
  let obj = array.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {}); // 개수 카운트 객체 obj 생성
  let values = [...Object.values(obj)]; // 객체에서 값(빈도수)의 배열만 추출
  let maxNum = Math.max(...values); // 빈도가 가장 높은 값이 최빈값
  let idx = values.indexOf(maxNum);
  let keys = [...Object.keys(obj)]; //키 배열 
  return values.filter((n) => n === maxNum).length === 1 ? parseInt(keys[idx],10) : -1;
  //리턴할 때 최빈값 여러개일 경우 예외처리
}
