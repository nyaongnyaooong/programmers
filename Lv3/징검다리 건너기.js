// https://school.programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  // 징검다리를 건널 수 있는 인원수 찾기 (1 ~ 200000000) - 이분 탐색
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let continuous = 0;
    let canPass = true;

    // 중앙값의 인원수로 건널 수 있는지 확인
    for (const stone of stones) {
      if (stone < mid) continuous++;
      else continuous = 0;

      if (continuous >= k) {
        canPass = false;
        break;
      }
    }

    // 건널 수 있으면 left를 옮김
    if (canPass) left = mid + 1;
    // 건널 수 없으면 right를 옮김
    else right = mid - 1;
  }

  return right;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
