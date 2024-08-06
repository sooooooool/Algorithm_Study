function solution(myString) {
    return myString.replace(/[a-z]/g, match => match.toUpperCase()); 
}