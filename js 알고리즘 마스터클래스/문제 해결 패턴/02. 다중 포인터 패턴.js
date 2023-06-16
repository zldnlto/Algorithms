// 오름차순 정렬에서 합계가 0인 첫번째 쌍 찾기

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 도전과제 고유값 개수 찾기
var arr = [1, 1, 1, 2, 2]; // 2

// 나의 풀이 - 포인터 이용하지 않음
function countUniqueValues(arr) {
  let arrSet = new Set(arr);
  return arrSet.size;
}

// 다중 포인터 예시 문제 - 고유값 찾기

function solution(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return i + 1;
}

let example = [1, 2, 2, 3, 3, 4, 4, 5, 6];
solution(example); //6
