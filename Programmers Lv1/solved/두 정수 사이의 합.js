 //a가 b보다 클 경우 대응못함
function solution(a, b) {
    let answer = 0;
    while (a<=b) {
        answer+= a;
        a++;
    } return answer;
    
}

// 배열로 만들어서 정렬하고 등차수열의 합 
function solution(a, b) {
    let temp = [a,b].sort(); 
    return  (temp[1]+1 - temp[0]) * (a+b) / 2 ;
}
//=> 75점이 나왔음



function solution(a, b) {
    const count = Math.abs(a-b)+1; 
    return count * (a+b) / 2 ;
}
