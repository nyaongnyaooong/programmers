// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  // DFS 함수 정의
  function dfs(computer, visited) {
    visited[computer] = true;
    for (let i = 0; i < n; i++) {
      if (computers[computer][i] === 1 && !visited[i]) {
        dfs(i, visited);
      }
    }
  }

  // 방문 여부를 저장하는 배열 초기화
  const visited = new Array(n).fill(false);
  let networkCount = 0;

  // 모든 컴퓨터를 순회하며 네트워크 확인
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited);
      networkCount++;
    }
  }

  return networkCount;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
