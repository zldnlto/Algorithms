function solution(price, money, count) {
    let answer = 0;
    let totalPrice = price * count * (1+count)/2;
    return totalPrice <= money ? 0 : totalPrice-money;

}

//while문으로 어렵게 생각하다가 ^ ^; 

//for문 사용한 케이스 
function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}