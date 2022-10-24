function solution(num) {
    if (num === 1) return 0;
    let count = 0;
    while (num !== 1){
    num % 2 == 0 ? num /= 2 : num = (num*3)+1; 
        count++;
    }
    if (count >= 500) {
        return -1
    }else {
        return count;
    }
}