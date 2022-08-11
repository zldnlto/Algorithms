//1 비교군 temp 배열 생성한 후 filter 
function solution(numbers) {
    temp =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
    let arr = temp.filter((x)=> !numbers.includes(x));
    let sum = arr.reduce((acc,cur)=> acc+cur, 0);
    return sum;
}

//2 45에서 배열의 총합 빼기
function solution(numbers) {
    const sum = numbers.reduce((acc, cur)=> acc + cur, 0)
    const answer = 45 - sum;
    return answer;
}


function solution(arr, fee) {
    let answer = 0; 
    for (let i =0; i <arr.length; i++) {
        if(arr[i] % 5 === 0){
            arr[i] = arr[i] * 0.8 * fee; 
        } else {
            arr[i] = arr[i] * fee;
        };
    }
    return answer = arr.reduce((acc,cur)=> acc+cur, 0);

}
