// https://school.programmers.co.kr/learn/courses/30/lessons/42628

const addQueue = (num, queue) => {
  if (queue.length === 0) {
    queue.push(num);
    return queue;
  }

  const newQueue = new Array(queue.length + 1);
  let isAdded = false;

  for (let i = 0; i < newQueue.length; i++) {
    if (num < queue[i] && !isAdded) {
      newQueue[i] = num;
      isAdded = true;
    } else if (!isAdded) newQueue[i] = queue[i] || num;
    else newQueue[i] = queue[i - 1];
  }
  return newQueue;
};

function solution(operations) {
  let queue = [];
  for (const operation of operations) {
    const [command, number] = operation.split(' ');
    const num = parseInt(number);
    if (command === 'I') {
      queue = addQueue(num, queue);
    } else if (command === 'D') {
      if (queue.length === 0) continue;
      if (num === 1) queue.pop();
      else queue.shift();
    }
  }

  const max = queue[queue.length - 1] ?? 0;
  const min = queue[0] ?? 0;

  return [max, min];
}

console.log(
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']),
);

console.log(
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ]),
);
