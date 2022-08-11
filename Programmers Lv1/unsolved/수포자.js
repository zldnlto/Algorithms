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

//오ㅐ막힐꼬 

function solution(card) {
    // card[i]뒤에서 가장 작은 값을 찾아 변경하기 반복  
    for (let i = 0; i<card.length-1; i++){
        const sliced = card.slice(i+1,card.length);
        const min = Math.min(...sliced);
        const minIdx = sliced.indexOf(min);
        [card[i],card[minIdx+i+1]] = [card[minIdx+i+1], card[i]];
    }
    return card;
}


function solution(sticks) {
    let answer = ''; // [6,1,5]

    const max = Math.max(...sticks); //6 
    const temp = sticks.filter((item)=> item !== max);
    const tempSum = temp.reduce((acc, cur) => acc + cur, 0);
    
    if (tempSum === max) {
        return answer = 'YES';
    } else {
        return answer = 'NO';
    }



    return answer;
}