function solution(myString, pat) {
    let lowerString = myString.toLowerCase();
    let lowerPat = pat.toLowerCase();
    
    let regex = new RegExp(lowerPat);
    return regex.test(lowerString) ? 1 : 0;
}