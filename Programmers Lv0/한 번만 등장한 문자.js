function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.split(s[i]).length === 2) answer += s[i];
  }
  return [...answer].sort().join("");
}

//참고해볼 다른 풀이들

function solution(s) {
  const freq = {};

  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  const keys = Object.keys(freq);
  return keys
    .filter((key) => freq[key] === 1)
    .sort()
    .join("");
}

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
