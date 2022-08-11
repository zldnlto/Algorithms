function solution(x, n) {
    let answer = [];
    for (i=0; i<n; i++){
     answer.push(x + x * ([i]*1));   
    }
    return answer;
}