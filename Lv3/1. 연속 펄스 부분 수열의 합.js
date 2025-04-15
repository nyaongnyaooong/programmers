// https://school.programmers.co.kr/learn/courses/30/lessons/161988

function solution(sequence) {
  // 1. 두 가지 결과를 저장할 배열 생성
  const n = sequence.length;
  const pattern1 = new Array(n); // [1, -1, 1, -1, ...] 패턴
  const pattern2 = new Array(n); // [-1, 1, -1, 1, ...] 패턴

  // 2. 각 패턴으로 수열 변환
  for (let i = 0; i < n; i++) {
    pattern1[i] = sequence[i] * (i % 2 === 0 ? 1 : -1);
    pattern2[i] = sequence[i] * (i % 2 === 0 ? -1 : 1);
  }

  // 3. 각 패턴에서 최대 부분 수열의 합 찾기
  function getMaxSum(arr) {
    let currentSum = 0;
    let minSum = 0;
    let maxResult = 0;

    for (const num of arr) {
      currentSum += num;
      // 현재까지의 합에서 이전까지의 최소 합을 뺀 값과 비교
      maxResult = Math.max(maxResult, currentSum - minSum);
      minSum = Math.min(minSum, currentSum);
    }

    return maxResult;
  }

  // 4. 두 패턴 중 더 큰 결과 반환
  return Math.max(getMaxSum(pattern1), getMaxSum(pattern2));
}
