// https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&statuses=unsolved&levels=3&languages=javascript

function solution(tickets) {
  // stack은 LIFO이므로 역순정렬
  tickets.sort((a, b) => b[1].localeCompare(a[1]));

  // 현재 상태, 남은 티켓, 현재까지 경로
  const stack = [{ current: 'ICN', leftTickets: tickets, path: ['ICN'] }];
  while (stack.length > 0) {
    const { current, leftTickets, path } = stack.pop();

    // 현재 노드에서 갈 수 있는 노드 탐색
    for (let i = 0; i < leftTickets.length; i++) {
      const [ticketCurrent, ticketNext] = leftTickets[i];
      if (ticketCurrent === current) {
        // 티켓 사용처리
        const newLeftTickets = [
          ...leftTickets.slice(0, i),
          ...leftTickets.slice(i + 1),
        ];
        // 남은 티켓이 없으면 바로 경로 반환
        if (!newLeftTickets.length) return [...path, ticketNext];

        // 스택에 다음 노드 추가
        stack.push({
          current: ticketNext,
          leftTickets: newLeftTickets,
          path: [...path, ticketNext],
        });
      }
    }
  }
}

// console.log(
//   solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND'],
//   ]),
// );
console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ]),
);
