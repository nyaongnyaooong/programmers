// https://school.programmers.co.kr/learn/courses/30/lessons/43163

const canChange = (word1, word2) => {
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diff++;
  }
  return diff === 1;
};

function solution(begin, target, words) {
  // BFS
  // [단어, 변환 횟수]
  const queue = [[begin, 0]];
  // 무한 루프 방지용
  const visited = new Set();

  while (queue.length) {
    const [currentWord, count] = queue.shift();

    if (currentWord === target) {
      return count;
    }

    for (const word of words) {
      if (!visited.has(word) && canChange(currentWord, word)) {
        visited.add(word);
        queue.push([word, count + 1]);
      }
    }
  }

  // 큐가 비었는데도 도달하지 못했으면 변환 불가능
  return 0;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
