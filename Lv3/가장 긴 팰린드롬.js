// https://school.programmers.co.kr/learn/courses/30/lessons/12904

function solution(s) {
  let answer = 1;

  // 홀수 길이 팰린드롬 확인 (중앙 문자를 중심으로)
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      answer = Math.max(answer, right - left + 1);
      left--;
      right++;
    }
  }

  // 짝수 길이 팰린드롬 확인 (두 문자 사이를 중심으로)
  for (let i = 0; i < s.length - 1; i++) {
    let left = i;
    let right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      answer = Math.max(answer, right - left + 1);
      left--;
      right++;
    }
  }

  return answer;
}

console.log(solution('abcdcba')); // 7
console.log(solution('abacde')); // 3
console.log(solution('abaabaaaaaaa')); // 7
console.log(solution('abcbaqwqabcba')); // 13
console.log(solution('abcbaqwertrewqq')); // 9
console.log(solution('aaaa')); // 4
