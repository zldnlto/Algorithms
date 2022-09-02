function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2); 
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// 빅오를 위해 중첩 루프를 루프 2개로 나눈다

function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    } //배열 크기 같지 않으면 여기서 바로 중단 
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
    }
    return true
}

//for-of 배열이나 문자열에 적용하기 좋은 루프
// 객체 문자열 분석
// 선형 구조 형성
// 두 개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류한 다음 각 배열 비교 


// ANAGRAMS
// 두개의 문자열을 취하며 두 문자열이 서로의 아나그램이면 참
// 아나그램이란 문자열을 구성하는 문자 순서만 바뀌어 있는 글자 
// cinema iceman 
 

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

//나의 풀이
function validAnangram(a, b){
    if(a.length !== b.length){
        return false;
    }
    let obj1 = {}; //frequency
    let obj2 = {};

    for(let val of a){
        obj1[val] = (obj1[val] || 0) + 1
    }
    for(let val of b){
        obj2[val] = (obj2[val] || 0) + 1
    }
    for (let key in obj1){
        if(obj1.key !== obj2.key) {
            return false;
        }
    }
}


//풀이 

function validAnagram(first, second) {
    //1. 문자열 길이 먼저 확ㅇ니
    if(first.length !== second.length) {
        return false;
    }
    const lookup = {}; //빈도 카운터 객체 

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        //문자가 존재하면 +1, 아니라면 1 할당
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = seocnd[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('anagrams', 'nagaramm')