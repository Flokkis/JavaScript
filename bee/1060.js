
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let contadorPos = 0;
let numeros = [];
for(let i = 0; i < 6;i++){
    numeros[i] = parseFloat(lines[i]);
}
for(let i = 0; i < 6;i++){
 if(numeros[i] > 0){
     contadorPos = contadorPos + 1;
 }   
}
console.log(contadorPos+" valores positivos");