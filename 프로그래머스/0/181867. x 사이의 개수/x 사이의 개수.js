function solution(myString) {
    const lengths = myString.split("x").map(part => part.length);
    return lengths;
}