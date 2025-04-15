// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, vertex) {
  const map = Array.from(new Array(n), () => []);
  for (const [from, to] of vertex) {
    map[from - 1].push(to - 1);
    map[to - 1].push(from - 1);
  }

  // 초기화
  const queue = [0];
  const distance = new Map();
  distance.set(0, 0);

  let answer = 0;
  let maxDistance = 0;

  // bfs
  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of map[current]) {
      if (!distance.has(next)) {
        queue.push(next);
        const nextDistance = distance.get(current) + 1;
        distance.set(next, nextDistance);
        if (nextDistance > maxDistance) {
          maxDistance = nextDistance;
          answer = 1;
        } else if (nextDistance === maxDistance) answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ]),
); // 3
