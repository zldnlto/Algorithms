function solution(arr) {
    arr.sort((a,b)=>b-a).pop();
    return arr.length == 0 ? [-1] : arr; 
}

//교훈 : pop 자체는 '배열의 제일 마지막 인덱스 값을 가져옴'
//pop으로 마지막 원소 제거 후의 원래 배열을 불러와야한다 

// 예시를 보고 잘못 이해했었다 
// 1. 가장 작은 수를 찾고 
// 2. 그걸 제거한 배열을 리턴하기 였음 

function solution(arr) {
    const idx = arr.indexOf(Math.min(...arr));
    if (arr.length !== 1) {
        arr.splice(idx,1);
        return arr;
    } else {
        return [-1]
    }
}

function solution(arr) {
    const idx = arr.indexOf(Math.min(...arr));
    arr.splice(idx,1);
    return arr.length ? arr : [-1];
}

