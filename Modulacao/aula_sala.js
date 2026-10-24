const prompt = require("prompt-sync")()
function menu(){
    let alunos = [
        {nome: "lorena", nota: 6},
        {nome: "maya", nota: 8},
        {nome: "zuri", nota: 2}
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
            case 8:
                maiorNota(alunos)
                break
            case 9:
                contarReprovados(alunos)
                break
            case 10:
                buscarAluno(alunos)
                break
            case 11:
                aplicarBonus(alunos)
                break
            case 12:
                ordenarPorNota(alunos)
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
//Ex1.Acrescente a opção 8 ao menu: maiorNota(alunos), que retorna o aluno com a maior nota.
function maiorNota(vetor){
    let maior = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].nota >= vetor[maior].nota){
            maior = i
        }
    }
    console.log("Maior nota foi:")
    console.log("Nome:",vetor[maior].nome,"-Nota",vetor[maior].nota)
}
//Ex2.Crie contarReprovados(alunos), que retorna quantos alunos têm nota menor que 7.
function contarReprovados(vetor){
    let contador = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i].nota <=6){
            contador ++
        }
    }
    return console.log("Alunos reprovados:",contador)
}
//Ex3.Crie buscar(alunos), que pede um nome e exibe nome e nota do aluno (ou "não encontrado").
function buscarAluno(vetor){
    let nome  = prompt("Qual o nome do aluno a ser buscado:")
    let encontrado = buscarIndice(vetor, nome)
    if(encontrado == -1){
        return console.log("Aluno não cadastrado!!")
    }
    console.log("Aluno encontrado:")
    console.log("Nome:",vetor[encontrado].nome)
    console.log("Nota:",vetor[encontrado].nota)
}
//Ex4.Crie aplicarBonus(alunos, bonus), void, que soma o bônus à nota de todos os alunos.
function aplicarBonus(vetor){
    let bonus = parseFloat(prompt("Qual bônus deseja aplicar nas notas:"))
    for(let i = 0; i <vetor.length; i++){
        vetor[i].nota = vetor[i].nota + bonus
    }
}
//Ex5.Crie ordenarPorNota(alunos), void, que ordena o vetor da maior para a menor nota.
//BubleSort
function ordenarPorNota(vetor){
    let temp = 0
    for(let i = 0; i < vetor.length - 1; i++){
     for(let j = 0; j < vetor.length - 1 - i; j++){
        if(vetor[j + 1] === undefined)
            return
        if(vetor[j].nota > vetor[j + 1].nota){
            temp = vetor[j]
            vetor[j] = vetor[j + 1]
            vetor[j + 1] = temp
        }
     }   
    }
}

