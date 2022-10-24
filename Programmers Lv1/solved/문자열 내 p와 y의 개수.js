//빈도수 세기

function solution(s) {
  const temp = s.toLowerCase();
  const lookup = {}; // 빈도 카운터 객체
  for (let i = 0; i < temp.length; i++) {
    let letter = temp[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  if (lookup["p"] !== lookup["y"]) {
    return false;
  } else {
    return true;
  }
}

//💡 다른 풀이

function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// split('p')=> p가 구분자가 되어서 p와 p와 아닌 것들로 나뉨
// ppoooyy의 경우 ['','','oooyy']가 되어서 length는 3 (p의개수-1)
// 다른 데서 써보고싶다
