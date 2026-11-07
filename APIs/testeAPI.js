const prompt = require('prompt-sync')()
async function main(){
//Quatro linhas, são as 4 linhas mais básicas para buscar usar a url
//No caso isso é uma função async (async function)
//Await, essa "função" ele aguarda a resposta do servidor para seguir as linhas de códigos
//fetch, é a "função" que faz a requisição no servidor
//variavel.jason() converte a resposta do servidor que vem em json para objeto javaScript, usamos .json()
//Substring: limita o tamanho de uma string
    let nome = prompt("Digite o nome ou o código do pokemon: ")
    let url = "https://pokeapi.co/api/v2/pokemon-species/"
    let resposta = await fetch(url+nome)
    let dados = await resposta.json()
    console.log("ID:",dados.id)
    console.log("Nome:\n-",dados.name.substring(0,10))
    console.log("Tamanho da resposta",dados.length)
    //for(let i = 0; i < dados.length; i++){
    //    console.log("ID:",dados[i].id)
    //    console.log("Nome:\n-",dados[i].name.substring(0,10))
    //}
}
main()