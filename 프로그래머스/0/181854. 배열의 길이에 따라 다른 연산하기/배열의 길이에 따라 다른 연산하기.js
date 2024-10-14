function solution(arr, n) {
    const result = arr.map((value, index) => {
        if ( arr.length % 2 === 1) {
            return index % 2 === 0 ? value + n : value;
        } else {
            return index % 2 !== 0 ? value + n : value;
        }
    });
        return result;
}