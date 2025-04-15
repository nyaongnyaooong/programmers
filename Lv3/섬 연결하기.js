// https://school.programmers.co.kr/learn/courses/30/lessons/42861

const find = (array, x) => {
  if (array[x] === x) return x;
  // 경로 압축
  return (array[x] = find(array, array[x]));
};

const unite = (array, a, b) => {
  const rootA = find(array, a);
  const rootB = find(array, b);
  if (rootA !== rootB) {
    array[rootA] = rootB;
    return true;
  }
  return false;
};

function solution(n, costs) {
  // Union-Find를 위한 부모 배열
  const link = new Array(n).fill(0).map((_, i) => i);

  // cost 순으로 정렬
  costs.sort((a, b) => a[2] - b[2]);

  let bridge = 0;
  let answer = 0;
  for (const [a, b, cost] of costs) {
    // 두 섬이 연결되어 있지 않으면 연결
    if (unite(link, a, b)) {
      answer += cost;
      bridge++;
      // 간선의 개수가 n-1개면 종료
      if (bridge === n - 1) break;
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ]),
);
