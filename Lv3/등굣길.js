// https://school.programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, puddles) {
  // 지도 배열 생성
  const map = new Array(m);
  for (let i = 0; i < m; i++) {
    map[i] = new Array(n);
  }

  // 웅덩이 입력
  for (const puddle of puddles) {
    map[puddle[0] - 1][puddle[1] - 1] = 0;
  }

  map[0][0] = 1;

  // 경로 계산
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 웅덩이면 넘김
      if (map[i][j] === 0 || (i === 0 && j === 0)) continue;

      const upper = map[i - 1]?.[j] ?? 0;
      const left = map[i]?.[j - 1] ?? 0;
      map[i][j] = (upper + left) % 1000000007;
    }
  }

  return map[m - 1][n - 1];
}

console.log(solution(4, 3, [[2, 2]])); // expect 4
