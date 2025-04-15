// https://school.programmers.co.kr/learn/courses/30/lessons/42627

// Linked list queue
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  sortedEnqueue(value) {
    const newNode = {
      value,
      next: null,
    };
    let prev = null;

    // sorting
    while (1) {
      // head -> tail까지 탐색
      // 기본적으로 이전 노드의 다음 노드값이 현재 노드
      // 이전 노드가 없다면 현재 노드는 head
      const current = prev?.next === undefined ? this.head : prev.next;

      // 추가된 노드와 현재노드의 우선순위 비교
      if ((current?.value[1] ?? Infinity) > value[1]) {
        if (prev === null) this.head = newNode;
        else prev.next = newNode;
        newNode.next = current;
        if (newNode.next === null) this.tail = newNode;
        break;
      }

      prev = current;
    }
    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
}

function solution(jobs) {
  jobs.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[1] > b[1]) return 1;
    return -1;
  });

  const queue = new Queue();
  let jobIndex = 0;
  let currentTime = 0;
  let answer = 0;
  while (jobIndex < jobs.length || queue.size > 0) {
    // 큐가 비어있으면 추가
    if (queue.size === 0) {
      queue.sortedEnqueue(jobs[jobIndex]);

      // 현재 시간보다 나중에 시작하는 작업이면 현재 시간 업데이트
      if (currentTime < jobs[jobIndex][0]) currentTime = jobs[jobIndex][0];

      jobIndex++;
      continue;
    }

    // 큐에서 작업하나 빼와서 완료처리
    const currentJob = queue.dequeue();
    const [startTime, duration] = currentJob;
    // 완료후 현재시간
    currentTime += duration;

    // 해당 작업 소요시간 추가
    answer += currentTime - startTime;

    // 해당 작업이 끝나기 전에 들어오는 작업들 큐에 추가해줌
    while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
      queue.sortedEnqueue(jobs[jobIndex]);

      jobIndex++;
    }
  }
  return Math.floor(answer / jobs.length);
}

console.log(
  solution([
    [7, 8],
    [3, 5],
    [9, 6],
  ]),
); // 9

// console.log(
//   solution([
//     [0, 3],
//     [1, 9],
//     [3, 5],
//   ]),
// ); // 8

// console.log(
//   solution([
//     [0, 10],
//     [4, 10],
//     [5, 11],
//   ]),
// ); // 17

// console.log(
//   solution([
//     [0, 6],
//     [2, 8],
//     [3, 7],
//     [7, 1],
//     [11, 11],
//     [19, 25],
//     [30, 15],
//     [32, 6],
//     [40, 3],
//   ]),
// ); // 19
