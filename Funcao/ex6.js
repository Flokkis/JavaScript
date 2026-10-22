//variavel que não mudar
const prompt = require('prompt-sync')()
function dobrar(n){
    n = n * 2
    return n
}
let numero = prompt("Digite um numero:")
console.log(dobrar(numero),"é o dobro de",numero)

//O VALOR DA VARIAEL NÃO MUDA POIS É REALIZADO UMA COPIA(CRIA UM NOVO ENDEREÇO NA MEMORIA)
// DIFERENTE DO VETOR E OBJETO QUE MANDA O ENDEREÇO NA MEMORIA