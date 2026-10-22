function inverter(vetor){
    let vetorInv = []
    for(let i = vetor.length - 1; i >= 0; i--){
        vetorInv[vetorInv.length] = vetor[i]
    }
    console.log("Vetor invertido:", vetorInv)
}
let v = [1,2,3,4,5,6,7,8,9,10]
console.log("Vetor normal:",v)
inverter(v)
