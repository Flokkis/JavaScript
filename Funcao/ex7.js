//Dado um vetor de objetos turma (nome, nota), crie mediaTurma(turma) que retorna a média das notas.
function calcularMedia(vetor){
    let soma = 0
    let contador = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i].nota
        contador ++
    }
    return soma / contador
}
let dadosAlunos = [
    {nome: "Beatriz", nota: 5},
    {nome: "Lorena", nota: 7},
    {nome: "Mariana", nota: 10},
    {nome: "Eduardo", nota: 8}
]
console.log("A média dos alunos foram:", calcularMedia(dadosAlunos))