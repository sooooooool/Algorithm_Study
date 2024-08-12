function solution(num_list, n) {
    const part1 = num_list.slice(n);
    const part2 = num_list.slice(0, n);
    return part1.concat(part2);
}