
function solution(arr){
    let answer = [];
    for(let i = 0 ; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]); 
        }
    }
    return answer;   
}

//reduce 
function solution(arr) {
    return arr.reduce((acc, cur,i) =>{
        if(cur !== acc[i-1]){
            return [...acc, cur]
        }else{
            return acc
        }
    },[])
};

//reduce + 삼항연산자는 왜 실행이 안될까 iterable?
function solution(arr) {
    return arr.reduce((acc, cur,i) =>{
        cur !== arr[i-1] ? [...acc, cur] : acc; 
    },[])
};


//쩌는풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}