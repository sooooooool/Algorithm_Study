    function solution(my_string) {
    let transformedArray = [...my_string].map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }
    });
    return transformedArray.join('');
}
                                        
                                        
                                        
                                            