// https://school.programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  // 진출 지점 기준으로 정렬
  routes.sort((a, b) => a[1] - b[1]);

  // 첫 카메라는 첫 차량의 진출 지점에 설치
  let camera = routes[0][1];
  let count = 1;

  for (let i = 1; i < routes.length; i++) {
    // 현재 카메라가 해당 차량의 진입 지점보다 작으면
    if (camera < routes[i][0]) {
      // 새로운 카메라 필요
      camera = routes[i][1];
      count++;
    }
  }

  return count;
}

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ]),
); // expect 2
