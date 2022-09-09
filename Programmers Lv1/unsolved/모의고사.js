//처음에 짰던 것
function solution(answers) {
    const students = 
    [[1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]];

    const scoreList = [];
    const answer = [];

    for (let student of students) {
        scoreList.push(
          answers.reduce((acc, cur, idx) => {
            cur === student[idx % student.length] ? acc++ : acc;
            return acc;
          }, 0)
        );
      }

    const highScore = Math.max(scoreList); 
    for (let i=0; i<scoreList.length; i++){
        if (scoreList[i] === highScore){
            answer.push(scoreList[i]);}
    }
    return answer;

}

function solution(answers) {
    const students = 
    [[1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]];

}

//야심찬 for문 중첩 시도 
function solution(answers) {
    const students = 
    [[1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]];

    const score = [];

    for (let i=0; i<students.length; i++) {
        for(let j=0; j<answers.length; j++){
            if(answers[j] === students[i][j%students[i].length]){
                score[i]+= 1;
            }
        }
    }
    
}




//for student of students로 순회하고 
//reduce로 answer값과 비교해서 점수 추출하고 
// score이라는 새 배열에 점수 push, 학생 1,2,3의 점수가 담긴 배열 
// answer 배열에 score의 최대값 index를 push해서 출력
// 만약에 점수가 모두 같으면 [1,2,3] 출력 


// highScore을 Math.max(...score)로 구하고 
// score 배열 순회하면서 highScore인것 answer에 index push 
///


//reduce쓰면 for을 안 돌아도 되지 않나 ??!?! 

function solution(answers) {
    const students = 
    [[1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]];

    const score = students.reduce((acc,cur,i)=> {
        if(answers[i] == cur[i][answers[i]%cur[i].length]) {
            return acc[i]+=1
        }
    },[]);

    console.log(score);
}

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


    //const isHighScore = (score) => score === highScore;
    // return scoreArr.findIndex(isHighScore); 
    // const answer = [scoreArr.findIndex(isHighScore)]; //findIndex는 한 개만 찾아진다 



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
    const isHighScore = (score) => score === highScore;
    const answer = [scoreArr.findIndex(isHighScore)]; //findIndex는 한 개만 찾아진다
    
    if(scoreArr=[highScore,highScore,highScore]){
        return [1,2,3];
    }else {
        return answer;
    }
    
}