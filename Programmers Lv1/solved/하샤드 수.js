//Number > String > Array
function solution(x) {
    let Xstring = x +'';
    let sum = Xstring.split('')
    .map(Number) //배열 요소 정수로
    .reduce((acc,cur)=> acc+cur,0);
    return x % sum === 0 ? true : false;

}
//Number > Array 
function numberToArray(x) {
    let arr = [];
    do {
        arr.push(x % 10); 
        x = Math.floor(x/10); 
    } while (x>0);
    return arr;
}

function solution2(x) {
    let sum = numberToArray(x).reduce((arr,cur) => arr+cur,0); 
    return x % sum === 0 ? true : false;
}

//x값이 연산을 통해 0으로 되어있는 상태라서 오류남> 함수 분리 
