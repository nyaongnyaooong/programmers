// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  A.sort((a, b) => b - a); 
  B.sort((a, b) => b - a); 
  
  let index = 0
  let score = 0;  
  for (const a of A) {
      // B팀의 현재 수가 A팀의 수보다 크면 승점 획득
      if (B[index] > a) {
          score++;
          index++;
      }
  }
  
  return score;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // expect 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // expect 0
