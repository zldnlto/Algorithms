//1
function solution(str1, str2) {
  if (str1.indexOf(str2) < 0) {
    return 2;
  } else {
    return 1;
  }
}

//2
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
