// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const gemKinds = new Set(gems).size;
  const gemMap = new Map();

  let answer = [1, gems.length];
  let left = 0;

  // 오른쪽으로 옮기면서 보석 종류 카운트
  for (let right = 0; right < gems.length; right++) {
    const gem = gems[right];
    gemMap.set(gem, (gemMap.get(gem) ?? 0) + 1);

    // 왼쪽 옮길 수 있는 만큼 최대로 옮김
    while (gemMap.get(gems[left]) > 1) {
      const leftGem = gems[left];
      gemMap.set(leftGem, gemMap.get(leftGem) - 1);
      left++;
    }

    // 조건 만족하면 answer로 업데이트
    if (gemMap.size === gemKinds) {
      const currentLength = right - left;
      const beforeLength = answer[1] - answer[0];
      if (currentLength < beforeLength) {
        answer = [left + 1, right + 1];
        // 최소값이면 더 이상 조회하지 않고 바로 정답제출
        if (gemKinds === currentLength + 1) break;
      }
    }
  }

  return answer;
}

console.log(
  solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']),
); // [3, 7]
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); // [1, 3]
console.log(solution(['XYZ', 'XYZ', 'XYZ'])); // [1, 1]
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); // [1, 5]
console.log(solution(['A', 'B', 'B', 'C', 'A', 'C', 'B', 'B', 'A'])); // [3, 5]
