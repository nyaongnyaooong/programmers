// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let left = 1;
  // O(N)
  let right = Math.max(...times) * n;

  // 이분 탐색 O(logN)
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (sum >= n) right = mid;
    else left = mid + 1;
  }

  return left;
}

console.log(solution(6, [7, 10])); // 28
