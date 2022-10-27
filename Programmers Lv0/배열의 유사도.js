function solution(s1, s2) {
  var count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) count++;
  }
  return count;
}
