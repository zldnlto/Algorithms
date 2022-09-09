function solution(left, right) {
    let answer = 0;
    let i = left;
    while (i < right) {
        if (//약수개수 짝수) {
            answer += i; 
            i++;
            }else{
            answer -= i;
            i++;
        }
    }
    return answer;
}