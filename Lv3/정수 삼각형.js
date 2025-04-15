// https://school.programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
// 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경로를 찾아서 최댓값을 반환하는 문제

function solution(triangle) {
  let prevMaxLine = [];
  for (let line = 0; line < triangle.length; line++) {
    const newMaxLine = [];
    for (let element = 0; element < triangle[line].length; element++) {
      const prevElement1 = prevMaxLine[element - 1] ?? 0;
      const prevElement2 = prevMaxLine[element] ?? 0;
      const prevMaxElement = Math.max(prevElement1, prevElement2);
      const maxElement = triangle[line][element] + prevMaxElement;
      newMaxLine.push(maxElement);
    }
    prevMaxLine = newMaxLine;
  }
  return Math.max(...prevMaxLine);
}
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
