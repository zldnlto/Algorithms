function solution(my_string, num1, num2) {
  let my_arr = my_string.split("");
  let idx1 = my_string[num1];
  my_arr[num1] = my_arr[num2];
  my_arr[num2] = idx1;
  return my_arr.join("");
}
