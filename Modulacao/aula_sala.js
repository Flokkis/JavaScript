const prompt = require("prompt-sync")()
function menu(){
    let alunos = [
        {nome: "lorena", nota: 10},
        {nome: "maya", nota: 8.5},
        {nome: "zuri", nota: 9}
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
                listarAprovados(alunos)
                break
            case 6:
                alterarNota(alunos)
                break
            case 7:
                removerAluno(alunos)
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
    console.log("1 : Exibir alunos")
    console.log("2 : Inserir aluno")
    console.log("3 : Somar notas")
    console.log("4 : Media de todos alunos")
    console.log("5 : Listar aprovados")
    console.log("6 : Alterar nota")
    console.log("7 : Remover aluno")
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
function listarAprovados(vetor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].nota >= 7){
            console.log("Aluno aprovado:")
            console.log("Nome:",vetor[i].nome)
            console.log("Nota:",vetor[i].nota)
        }
    }
}
function buscarIndice(vetor, nome){//função auxiliar
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].nome === nome){
            return i
        }
    }
    return -1
}
function alterarNota(vetor){
    let nome = prompt("Qual aluno deseja alterar a nota:")
    let nota = parseFloat(prompt("Qual a nova nota:"))
    let indice = buscarIndice(vetor, nome)
    vetor[indice].nota = nota
    console.log("Nota alterada com sucesso.")
}
function removerAluno(vetor){
    let rev_nome = prompt("Qual aluno deseja remover")
    let indice_a = parseInt(buscarIndice(vetor, rev_nome))
    if(indice_a === -1){
        console.log("Aluno não encontrado.")
        return
    }
    for(let i = indice_a; i < vetor.length -1; i++)
        vetor[i] = vetor[i + 1]
        vetor.length = vetor.length - 1
        console.log("Aluno removido.")
}
