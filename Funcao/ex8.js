//Reutilize somaLinha(matriz, i) para criar somaTotal(matriz), que retorna a soma de todos os elementos.
const prompt = require('prompt-sync')()
function somarLinha(matriz, linha){
    let soma = 0
    for(let i = 0; i < matriz[linha].length; i++){
        soma += matriz[linha][i]
    }
    return soma
}
function somaMatriz(matriz){
    let total = 0
    for(let i = 0; i < matriz.length; i++){
        total += somarLinha(matriz, i)
    }
    return total
}
let matriz = [
    [2,5,7,10],
    [3,6,9,19],
    [12,4,8,3],
    [1,2,3,4]
]
let linha = prompt("Qual linha deseja somar:") - 1
console.log("A soma da linha",linha + 1,"deu",somarLinha(matriz, linha))
let somarTudo = prompt("Deseja somar todas as linhas?[S]=[1]/[N]=[0]").toLocaleUpperCase().charAt(0)
if(somarTudo === "S" || somarTudo === "1"){
    console.log("A soma de todos os itens da matriz é:", somaMatriz(matriz))
}
