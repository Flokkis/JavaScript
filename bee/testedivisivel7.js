let numero = 89427
let resto = numero % 10
console.log(resto)
let restanteNum = Math.floor(numero / 10)
let divi = restanteNum - (resto * 2)
if(divi % 7 == 0 ){
    console.log("Numero divisivel por 7")
}
else{
    console.log("Numero não divisivel")
}