function solution(myString) {
    return myString.replace(/[A-Z]/g, match => match.toLowerCase());
}