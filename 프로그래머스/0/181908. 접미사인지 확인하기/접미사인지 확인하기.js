function solution(my_string, is_suffix) {
    const myStringLength = my_string.length;
    const isSuffixLength = is_suffix.length;
    
    if (isSuffixLength > myStringLength) {
        return 0;
    }
    
    const endSubstring = my_string.substring(myStringLength - isSuffixLength);
    if (endSubstring === is_suffix) {
        return 1;
    } else {
        return 0;
    }
}