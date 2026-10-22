var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let mult = 0;
let numeros = parseInt(lines[0]);
for(let i = 2; i <= numeros; i+=2){
    console.log(i+"^2 = "+(i * i))
}