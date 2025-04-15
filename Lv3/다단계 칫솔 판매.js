// https://school.programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  const map = new Map();
  // 맵 객체 생성
  for (let i = 0; i < enroll.length; i++) {
    map.set(enroll[i], { referral: referral[i], profit: 0 });
  }

  for (let i = 0; i < seller.length; i++) {
    let current = seller[i];
    let newProfit = amount[i] * 100;
    while (current !== '-' && newProfit > 0) {
      // 위에 바쳐야할 금액 계산
      const payment = Math.floor(newProfit * 0.1);
      // 이익 추가
      const sellerInfo = map.get(current);
      sellerInfo.profit += newProfit - payment;

      current = sellerInfo.referral;
      newProfit = payment;
    }
  }

  return enroll.map((person) => map.get(person).profit);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10],
  ),
);
// [360, 958, 108, 0, 450, 18, 180, 1080]
console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['sam', 'emily', 'jaimie', 'edward'],
    [2, 3, 5, 4],
  ),
);
// [0, 110, 378, 180, 270, 450, 0, 0]
