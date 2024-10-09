function solution(num_list) {
    const {oddSum, evenSum} = num_list.reduce((acc, num, index) => { index % 2 === 0 ? acc.oddSum += num : acc.evenSum += num; return acc;}, {oddSum : 0, evenSum : 0});
    return Math.max(oddSum, evenSum);
}