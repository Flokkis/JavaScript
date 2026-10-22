var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let vetorX = [];
for(let i = 0; i < 10; i++){
    vetorX[i] = parseInt(lines[i]);
}
for(let i = 0; i < 10; i++){
    if(vetorX[i] <= 0 || isNaN(vetorX[i])){
        vetorX[i] = 1;
    }
    console.log("X["+i+"] = "+vetorX[i])
}