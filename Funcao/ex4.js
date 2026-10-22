function contarPares(vetor){
    let contador = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 === 0){
            contador++
        }
    }
    return contador
}
let v = [4,5,2,8,9,1,4]
console.log("Dentro do vetor tem:",contarPares(v),"numeros pares")