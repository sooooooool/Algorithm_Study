function solution(myString, pat) {
  let transformedString = '';
  for (let char of myString) {
    if (char === 'A') {
      transformedString += 'B';
    } else if (char === 'B') {
      transformedString += 'A';
    }
  }
  return transformedString.includes(pat) ? 1 : 0;
}