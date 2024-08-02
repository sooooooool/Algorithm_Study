function solution(myString) {
    let result = myString.replace(/a/g, 'A');
    result = result.replace(/(?!A)[A-Z]/g, (match) => match.toLowerCase());
    
    return result;
}