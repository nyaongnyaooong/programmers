// https://school.programmers.co.kr/learn/courses/30/lessons/64064

const isMatch = (user_id, banned_id) => {
  if (user_id.length !== banned_id.length) return false;
  for (let i = 0; i < user_id.length; i++) {
    if (banned_id[i] === '*') continue;
    if (user_id[i] !== banned_id[i]) return false;
  }
  return true;
};

function solution(user_id, banned_id) {
  // 각 불량 사용자 패턴에 매칭되는 사용자 ID 목록 생성
  const candidates = banned_id.map((pattern) =>
    user_id.filter((user) => isMatch(user, pattern)),
  );

  // 중복 제거를 위한 Set
  const resultSet = new Set();

  // DFS로 가능한 모든 조합 찾기
  const dfs = (index, selected) => {
    if (index === banned_id.length) {
      // 정렬하여 순서 무관하게 동일한 조합 처리
      resultSet.add([...selected].sort().join(','));
      return;
    }

    // 현재 불량 사용자 패턴에 매칭되는 사용자들 순회
    for (const userId of candidates[index]) {
      if (selected.has(userId)) continue;
      selected.add(userId);
      dfs(index + 1, selected);
      selected.delete(userId);
    }
  };

  dfs(0, new Set());

  return resultSet.size;
}

console.log(
  solution(
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['fr*d*', 'abc1**'],
  ),
);
console.log(
  solution(
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['*rodo', '*rodo', '******'],
  ),
);
console.log(
  solution(
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['fr*d*', '*rodo', '******', '******'],
  ),
);
