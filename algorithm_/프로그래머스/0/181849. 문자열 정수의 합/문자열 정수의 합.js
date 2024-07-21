function solution(num_str) {
    return num_str.split('').reduce((sum, digit) => sum + Number(digit), 0);
}