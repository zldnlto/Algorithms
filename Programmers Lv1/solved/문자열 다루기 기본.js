function solution(s) {
  let reg = /^[0-9]+$/;
  if (s.length == 4 || s.length == 6) {
    return reg.test(s);
  } else {
    return false;
  }
}
