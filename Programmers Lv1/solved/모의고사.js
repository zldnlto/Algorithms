function solution(answers) {
    const students = [
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
    ];

    const scoreArr= []; 

    for (let i = 0; i < students.length; i++){
        let score = 0;
        for (let j = 0; j < answers.length; j++){
            if(answers[j] === students[i][j % students[i].length]){
                score++;            
            }
        }
        scoreArr.push(score);
    }
    
    //최고점
    const highScore = Math.max(...scoreArr);
    const answer = []; 

    for(let i=0; i<scoreArr.length; i++){
        if(highScore === scoreArr[i]){
            answer.push(i+1);
        }
    }
    return answer; 

}