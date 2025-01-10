function solution(order) {
    const digits = String(order).split('');
    const claps = digits.filter(digit => ['3', '6', '9'].includes(digit)).length;
    
    return claps;
}