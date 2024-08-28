function solution(my_strings, parts) {
    let result = '';
    for (let i = 0; i < my_strings.length; i++) {
        const str = my_strings[i];
        const [start, end] = parts[i];
        
        const substring = str.substring(start, end + 1);
        
        result += substring;
        
    }
     return result;
}