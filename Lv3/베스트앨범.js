// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const genreMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    // 앨범에 없다면 맵 생성
    if (!genreMap.has(genre)) genreMap.set(genre, { total: 0, songs: [] });

    // 장르 총 재생 횟수 증가
    genreMap.get(genre).total += play;

    // 장르 곡이 2개 이하라면 곡 추가
    if (genreMap.get(genre).songs.length < 2)
      genreMap.get(genre).songs.push([i, play]);
    else {
      // 장르 곡이 2개 이상이라면 최소 재생 횟수 곡 제거
      const minPlay = Math.min(
        ...genreMap.get(genre).songs.map((song) => song[1]),
      );
      if (play > minPlay) {
        // 재생 횟수가 더 많다면 최소 재생 횟수 곡 제거
        genreMap.get(genre).songs.splice(
          genreMap.get(genre).songs.findIndex((song) => song[1] === minPlay),
          1,
        );
        genreMap.get(genre).songs.push([i, play]);
      }
    }
  }

  // 장르 총 재생 횟수 내림차순 정렬
  const sortedGenreMap = Array.from(genreMap.entries()).sort(
    (a, b) => b[1].total - a[1].total,
  );

  const answer = [];
  for (const [_, { songs }] of sortedGenreMap) {
    // 장르 곡 재생 횟수 내림차순 정렬
    songs.sort((a, b) => b[1] - a[1]);
    answer.push(...songs.map((song) => song[0]));
  }
  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ),
); // expect [4, 1, 3, 0]
