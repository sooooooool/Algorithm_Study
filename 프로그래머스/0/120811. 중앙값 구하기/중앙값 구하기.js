function solution(array) {
    array.sort ((a,b) => a - b);
    let midIndex = Math.floor(array.length / 2);
    if (array.length % 2 !==0) {
        return array[midIndex];
    } else {
        return (array[midIndex - 1] + array[midIndex]) / 2;
    }
}