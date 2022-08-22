// 문자 그대로 풀기 
// true 이면 answer에 더해주고, false 면 빼주기 
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0 ; i < absolutes.length; i++){
    signs[i] ? 
        answer += absolutes[i] 
        : answer -= absolutes[i];
    }
    return answer;
}

//reduce 사용

function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,i)=> signs[i] ? acc + cur : acc - cur,0)
}
