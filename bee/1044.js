var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let numeros1 = parseInt(lines[0]);
let numeros2 = parseInt(lines[1]);
let maior = 0;
let menor = 0;
if(numeros1 >= numeros2){
    maior = numeros1;
    menor = numeros2;
}
else{
    menor = numeros1;
    maior = numeros2;
}
if(maior % menor === 0){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}