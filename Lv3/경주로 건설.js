// https://school.programmers.co.kr/learn/courses/30/lessons/67259

const direction = {
  up: 0,
  right: 1,
  down: 2,
  left: 3,
};

function solution(board) {
  const N = board.length;

  // 방향: 0=상, 1=우, 2=하, 3=좌
  const nextDir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const oppositeDir = [2, 3, 0, 1];

  // 비용 배열 초기화 (위치별 방향별 최소 비용)
  const costs = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(Infinity)),
  );

  // 시작점 초기화
  costs[0][0][0] = 0;
  costs[0][0][1] = 0;
  costs[0][0][2] = 0;
  costs[0][0][3] = 0;

  // BFS 탐색
  const queue = [];
  class queueInfo {
    constructor(x, y, dir, cost) {
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.cost = cost;
    }
  }
  // 시작 위치, 방향, 비용 (처음에는 아래와 오른쪽으로만 갈 수 있음)
  queue.push(new queueInfo(0, 0, direction.right, 0)); // 오른쪽
  queue.push(new queueInfo(0, 0, direction.down, 0)); // 아래쪽

  while (queue.length > 0) {
    const { x, y, dir, cost } = queue.shift();

    // 모든 방향 탐색
    for (let i = 0; i < 4; i++) {
      // 되돌아갈필요가 없으므로
      if (i === oppositeDir[dir]) continue;

      const nx = x + nextDir[i][0];
      const ny = y + nextDir[i][1];

      // 해당 방향의 칸이 범위를 벗어나거나 벽이면 스킵
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny] === 1)
        continue;

      let newCost = cost + 100;
      if (i !== dir) newCost += 500;

      if (newCost < costs[nx][ny][i]) {
        costs[nx][ny][i] = newCost;
        queue.push(new queueInfo(nx, ny, i, newCost));
      }
    }
  }

  // 도착점에 도달하는 최소 비용 찾기
  return Math.min(...costs[N - 1][N - 1]);
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]),
); // 900
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ]),
); // 3800
console.log(
  solution([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ]),
); // 2100
console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ]),
); // 3200
