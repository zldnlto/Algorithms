function solution(num_list, n) {
  var arr = new Array(num_list.length / 2).fill(0).map(() => new Array(n));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      var temp = num_list.shift();
      arr[i].push(temp);
    }
  }
  return arr;
}
