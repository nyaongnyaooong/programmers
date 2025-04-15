// https://school.programmers.co.kr/learn/courses/30/lessons/17678

function solution(n, t, m, timetable) {
  // 분단위로 변환
  const timeTable = timetable.map((time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  });

  // 정렬
  timeTable.sort((a, b) => a - b);

  
}

console.log