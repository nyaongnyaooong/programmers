// https://school.programmers.co.kr/learn/courses/30/lessons/132266

// Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List Queue
class Queue {
  constructor() {
    this.head = null; // 첫 번째 노드 (front)
    this.tail = null; // 마지막 노드 (rear)
    this.size = 0; // 큐의 크기
  }

  // 큐의 끝에 요소 추가
  enqueue(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  // 큐의 앞에서 요소 제거
  dequeue() {
    if (!this.head) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // 큐가 비었다면 tail도 null로 설정
    this.size--;
    return removedValue;
  }

  // 큐의 맨 앞 요소 반환
  peek() {
    return this.head ? this.head.value : null;
  }

  // 큐가 비었는지 확인
  isEmpty() {
    return this.size === 0;
  }

  // 큐의 크기 반환
  getSize() {
    return this.size;
  }
}

function solution(n, roads, sources, destination) {
  const map = Array.from({ length: n }, () => []);
  for (const [a, b] of roads) {
    // 양방향
    map[b - 1].push(a - 1);
    map[a - 1].push(b - 1);
  }

  // 각 노드별 도착지까지의 최소 거리 저장 배열
  const minDistanceMap = new Array(n).fill(-1);
  minDistanceMap[destination - 1] = 0;

  const queue = new Queue();
  queue.enqueue(destination - 1);

  // bfs
  while (queue.getSize()) {
    const current = queue.dequeue();

    for (const next of map[current]) {
      if (minDistanceMap[next] === -1) {
        minDistanceMap[next] = minDistanceMap[current] + 1;
        queue.enqueue(next);
      }
    }
  }

  return sources.map((source) => minDistanceMap[source - 1]);
}

// ||
// minDistanceMap[nextNode] > currentDistance + 1

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    [1],
  ),
); // [1, 2]

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5,
  ),
); // [2, -1, 0]
