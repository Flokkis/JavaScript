const prompt = require('prompt-sync')()
function main() {
    let ids = []
    let quant = parseInt(prompt("Quantos pókemon deseja buscar:"))
    for(let i = 0; i < quant; i++){
        ids[i] = prompt(`Digite os códigos/nome${i+1}:`).toLowerCase()
    }
    buscarPokemons(ids)
}
async function buscarPokemons(vetor) {
    let url = "https://pokeapi.co/api/v2/pokemon-species/"
    for(let i = 0; i < vetor.length; i++){
        let resposta = await fetch(url+vetor[i])
        let dados = await resposta.json()
        console.log("Numéro pókedex:",dados.id)
        console.log("Nome pókemon:",dados.name)
        console.log("É lendario?",dados.is_legendary ? "Sim":"Não")
    }
    
}
main()