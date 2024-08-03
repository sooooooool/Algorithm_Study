function solution(strArr) {
  return strArr.map((str, index) => {
    return index % 2 === 0 
      ? str.replace(/[A-Za-z]/g, (char) => char.toLowerCase()) 
      : str.replace(/[A-Za-z]/g, (char) => char.toUpperCase());
  });
}