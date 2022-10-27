function solution(hp) {
  let ants = {
    general: 5,
    soldier: 3,
    ergate: 1,
  };
  let count = 0;
  for (const ant in ants) {
    count += Math.floor(hp / ants[ant]);
    hp -= ants[ant] * Math.floor(hp / ants[ant]);
  }
  return count;
}
