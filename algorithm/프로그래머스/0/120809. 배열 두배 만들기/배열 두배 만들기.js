function solution(numbers) {
    let doubledNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        doubledNumbers.push(2 * numbers[i]);
    }
    
    return doubledNumbers;
}