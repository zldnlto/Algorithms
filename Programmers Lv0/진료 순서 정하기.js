function solution(emergency) {
    let count = emergency.length; 
    let arr = new Array(count).fill(1);
    for (let i=0; i<count; i++){
        for(let j=0; j<count; j++) {
            if(emergency[i] < emergency[j])
                arr[i] +=1;            
        }
    }
    return arr; 
}

//내가 하고싶었던게 이거잖아 !! 답안 풀이 + sorted라는 네이밍 센스 
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}

// slice() 말고 스프레드 문법으로 복사하기 
function solution(emergency) {
    let sorted = [...emergency].sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}