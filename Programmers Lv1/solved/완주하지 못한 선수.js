//배열 정렬 후 비교해서 없는애를 출력하기 
function solution(participant, completion) {
    participant = participant.sort(); 
    completion = completion.sort();
   for (let i = 0; i< participant.length; i++){
       if(participant[i] !== completion[i]) return participant[i];
   } 
};

//forEach 써보기
function solution (participant, completion) {
    participant = participant.sort(); 
    completion = completion.sort();
    completion.forEach (element => {
        delete participant.splice(participant.indexOf(person), 1)
    })
    return participant[0];
};