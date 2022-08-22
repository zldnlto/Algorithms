//간단한 문제일수록 빠르고 정확하고 깔끔히 풀 수 있게 
function solution(n) {
    const x = Math.sqrt(n);
    if(Math.floor(x) * Math.floor(x) == n) {
        return Math.pow(x + 1, 2); 
    } else {
        return -1;
    }
}
// solution 2.
function solution(n) {
    const x = Math.sqrt(n);
    return Math.floor(x) * Math.floor(x) == n ?
    Math.pow(x+1, 2) :
    -1 ;
}