// https://school.programmers.co.kr/learn/courses/30/lessons/12971

function solution(sticker) {
  const n = sticker.length;

  if (n === 1) return sticker[0];
  if (n === 2) return Math.max(sticker[0], sticker[1]);

  // 첫번째 스티커를 선택하는 경우
  let twoBack1 = sticker[0]; // dp1[0]
  let oneBack1 = sticker[0]; // dp1[1]
  let current1 = 0;

  // n-1까지만 순회 (마지막 스티커는 선택 불가)
  for (let i = 2; i < n - 1; i++) {
    current1 = Math.max(oneBack1, twoBack1 + sticker[i]);
    twoBack1 = oneBack1;
    oneBack1 = current1;
  }

  // 두번째 스티커를 선택하는 경우 
  let twoBack2 = 0; // dp2[0]
  let oneBack2 = sticker[1]; // dp2[1]
  let current2 = 0;

  // n까지 순회 (마지막 스티커 선택 가능)
  for (let i = 2; i < n; i++) {
    current2 = Math.max(oneBack2, twoBack2 + sticker[i]);
    twoBack2 = oneBack2;
    oneBack2 = current2;
  }

  return Math.max(current1, current2);
}

// console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])); // expect 36
// console.log(solution([1, 3, 2, 5, 4])); // expect 8
console.log(solution([0, 100, 10]));
