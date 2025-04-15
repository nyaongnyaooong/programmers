// https://school.programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
  const range = w * 2 + 1;  // 하나의 기지국이 커버하는 범위
  let answer = 0;
  let position = 1;  // 현재 위치
  let stationIdx = 0;  // 현재 확인중인 기지국 인덱스
  
  while (position <= n) {
      // 현재 위치가 기존 기지국의 범위 안에 있는 경우
      if (stationIdx < stations.length && position >= stations[stationIdx] - w) {
          position = stations[stationIdx] + w + 1;
          stationIdx++;
      }
      // 새로운 기지국 설치가 필요한 경우
      else {
          answer++;
          position += range;
      }
  }
  
  return answer;
}

console.log(solution(11, [4, 11], 1)); // expect 3
console.log(solution(16, [9], 2)); // expect 3
console.log(solution(199999998, [], 1));
