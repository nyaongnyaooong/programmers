// https://school.programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  const avg = Math.floor(s / n);
  const rest = s % n;

  if (avg === 0) return [-1];

  const answer = new Array(n).fill(avg);
  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}

console.log(solution(2, 9)); // expect [4, 5]
console.log(solution(2, 1)); // expect [-1]
console.log(solution(2, 8)); // expect [4, 4]
