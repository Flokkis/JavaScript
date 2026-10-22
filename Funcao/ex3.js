function maiorDeTres(a,b,c){
    if(a > b && a > c){
        return a
    }else if(b > c){
        return b
    }else{
        return c
    }
}
let numero1 = 10
let numero2 = 7
let numero3 = 3
console.log("O maior numero é", maiorDeTres(numero1,numero2,numero3))