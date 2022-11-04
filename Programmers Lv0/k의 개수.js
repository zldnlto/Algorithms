function solution(i, j, k) {
  let arr = [];
  for (let x = i; x <= j; x++) {
    arr.push(x + "");
  }
  return arr.join("").split(k).length - 1;
}

// for문에서 i 대신 x로 썼는데 for(i;i<=j;i++) 이런 식으로 그냥 i라고 함수에 넘겨진 아규먼트를 가져다 쓰는 방식으로 해도 된다.
