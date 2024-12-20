const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const rotated = rotateString90(str);
    
    console.log(rotated);
});

function rotateString90(str) {
    const lines = str.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        let rotatedLine = '';
        for (let j = lines.length - 1; j >= 0; j--) {
            rotatedLine += lines[j][i] || ' ';
        }
        result.push(rotatedLine);
    }

    return result.join('\n');
}