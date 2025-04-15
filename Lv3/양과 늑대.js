// https://school.programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
  // 그래프 구성
  const graph = Array.from({ length: info.length }, () => []);
  for (const [parent, child] of edges) {
    graph[parent].push(child);
  }

  // 방문 가능한 노드들의 집합과 현재 상태를 기준으로 최대 양의 수를 찾는 함수
  const dfs = (sheep, wolf, availableNodes) => {
    let maxSheep = sheep;

    // 현재 방문 가능한 모든 노드에 대해 시도
    for (const availableNode of availableNodes) {
      // 다음 늑대노드로 가는 순간 늑대수가 많아지면 패스
      if (sheep <= wolf + 1 && info[availableNode]) continue;

      // 다음 방문 가능한 노드들 계산
      const newNextNodes = new Set([
        ...availableNodes,
        ...graph[availableNode],
      ]);
      // 자기자신 제외
      newNextNodes.delete(availableNode);

      const nextSheep = sheep + (!info[availableNode] ? 1 : 0);
      const nextWolf = wolf + (info[availableNode] ? 1 : 0);

      // 방문 처리 후 재귀 호출
      maxSheep = Math.max(maxSheep, dfs(nextSheep, nextWolf, newNextNodes));
    }

    return maxSheep;
  };

  // 초기 상태로 시작 (루트 노드는 항상 양)
  return dfs(1, 0, new Set(graph[0]));
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ],
  ),
);

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ],
  ),
);

// function solution(info, edges) {
//   // 그래프 구성
//   const graph = Array.from({ length: info.length }, () => []);
//   for (const [parent, child] of edges) {
//     graph[parent].push(child);
//   }

//   // 방문 가능한 노드들의 집합과 현재 상태를 기준으로 최대 양의 수를 찾는 함수
//   const dfs = (sheep, wolf, visited, availableNodes) => {
//     let maxSheep = sheep;

//     // 현재 방문 가능한 모든 노드에 대해 시도
//     for (const availableNode of availableNodes) {
//       // 다음 늑대노드로 가는 순간 늑대수가 많아지면 패스
//       if (sheep <= wolf + 1 && info[availableNode]) continue;
//       // 이미 방문한 노드는 패스
//       if (visited.has(availableNode)) continue;

//       // 다음 방문 가능한 노드들 계산
//       const newNextNodes = new Set([
//         ...availableNodes,
//         ...graph[availableNode],
//       ]);
//       newNextNodes.delete(availableNode);

//       const nextSheep = sheep + (!info[availableNode] ? 1 : 0);
//       const nextWolf = wolf + (info[availableNode] ? 1 : 0);

//       // 방문 처리 후 재귀 호출
//       visited.add(availableNode);
//       maxSheep = Math.max(
//         maxSheep,
//         dfs(nextSheep, nextWolf, visited, newNextNodes),
//       );
//       // 백트레킹
//       visited.delete(availableNode);
//     }

//     return maxSheep;
//   };

//   // 초기 상태로 시작 (루트 노드는 항상 양)
//   const visited = new Set([0]);
//   return dfs(1, 0, visited, new Set(graph[0]));
// }
