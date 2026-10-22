const prompt = require("prompt-sync")()
function menu(){
    let alunos = [
        {nome: "Lorena", nota: 10},
        {nome: "Maya", nota: 8.5},
        {nome: "Zuri", nota: 9}
    ]
    let opcao
    do{
        opcao = exibirMenu()
        switch (opcao){
            case 1: //Exibir alunos
                exibirAlunos(alunos)
                break
            case 2://Inserir aluno
                inserirAluno(alunos)
                break
            case 3: //Somar notas
                somarNotas(alunos)
                break
            case 4: //Media todos alunos
                mediaAlunos(somarNotas(alunos),alunos)
                break
            case 5: //Listar aprovados
                listarAlunos()
                break
            case 0: //Fechar programa
        }
    }while(opcao !== 0)
}
menu()
function exibirMenu(){
    console.log("================================")
    console.log("========Sistema escolar=========")
    console.log("================================")
    console.log("1 : Exibir menu")
    console.log("2 : Inserir aluno")
    console.log("3 : Somar notas")
    console.log("4 : Media de todos alunos")
    console.log("5 : Listar aprovados")
    console.log("0 : Sair")
    return parseInt(prompt("Qual opcao vai ser?"))
}
function exibirAlunos(vetor){
    for(let i = 0; i < vetor.length; i++){
        console.log("Nome:",vetor[i].nome,"- Nota:",vetor[i].nota)
    }

}
function inserirAluno(vetor){
    let cadastroAlunos
    let tamanho_vetor
    do{
        
        let nome = prompt("Qual o nome do aluno:")
        let nota = parseInt(prompt("Qual a nota do aluno:"))
        vetor[vetor.length] = {
            nome: nome,
            nota: nota
        }
        cadastroAlunos = menuCadastro()//Cadastrar mais notas e alunos
    }while(cadastroAlunos !== 0)
}
function menuCadastro(){//Menu da funcao inserirAluno
    console.log("Deseja cadastrar mais alunos?")
    console.log("[1] = Sim")
    console.log("[0] = Não")
    return parseInt(prompt("Opção: "))
}
function somarNotas(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i].nota
    }
    console.log("soma de notas de todos os alunos:",soma)
    return soma
}
function mediaAlunos(soma, vetor){
    let media = soma / vetor.length
    console.log("A média de todos os alunos foi:",media.toFixed(2))
}