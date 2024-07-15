function solution(my_string) {
    let sum = 0;

    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];

        if (char >= '0' && char <= '9') {
            sum += Number(char)
        }
    }

    return sum;
}