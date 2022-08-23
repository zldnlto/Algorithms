function solution(numbers) {
    let temp =[];
    for (let i=0; i<numbers.length; i++){
        for (let j=i+1; j<numbers.length; j++){
            temp.push(numbers[i]+numbers[j])
        }
    }
    let answer = [...new Set(temp.sort((a,b)=>a-b))];
        
    return answer;
}