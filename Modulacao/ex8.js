const prompt = require("prompt-sync")()

function menu() {
    let produtos = [
        { nome: "caneta", preco: 2.50, quantidade: 100 },
        { nome: "caderno", preco: 15.00, quantidade: 30 },
        { nome: "borracha", preco: 1.20, quantidade: 50 }
    ]
    let opcao
    do {
        opcao = exibirMenu()
        switch (opcao) {
            case 1:
                exibirProdutos(produtos)
                break
            case 2:
                inserirProduto(produtos)
                break
            case 3:
                valorTotalEstoque(produtos)
                break
            case 4:
                mediaPreco(produtos)
                break
            case 5:
                listarEmEstoque(produtos)
                break
            case 6:
                alterarPreco(produtos)
                break
            case 7:
                removerProduto(produtos)
                break
            case 8:
                produtoMaisCaro(produtos)
                break
            case 9:
                contarSemEstoque(produtos)
                break
            case 10:
                buscarProduto(produtos)
                break
            case 11:
                aplicarReajuste(produtos)
                break
            case 12:
                ordenarPorPreco(produtos)
                break
            case 0:
        }
    } while (opcao !== 0)
}

menu()

function exibirMenu() {
    console.log("================================")
    console.log("========Sistema Estoque=========")
    console.log("================================")
    console.log("1 : Exibir produtos")
    console.log("2 : Inserir produto")
    console.log("3 : Calcular valor total do estoque")
    console.log("4 : Média de preço dos produtos")
    console.log("5 : Listar produtos em estoque")
    console.log("6 : Alterar preço")
    console.log("7 : Remover produto")
    console.log("8 : Mostrar o produto mais caro")
    console.log("9 : Contar produtos sem estoque")
    console.log("10 : Buscar produto")
    console.log("11 : Aplicar reajuste no preço(TODOS)")
    console.log("12 : Ordenar por preço")
    console.log("0 : Sair")
    return parseInt(prompt("Qual opcao vai ser? "))
}

function exibirProdutos(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log("Nome:", vetor[i].nome, "- Preço:", vetor[i].preco.toFixed(2), "- Quantidade:", vetor[i].quantidade)
    }
}

function inserirProduto(vetor) {
    let cadastroProdutos
    do {
        let validarCadastro
        let preco
        let quantidade
        let nome = prompt("Qual o nome do produto: ")
        
        validarCadastro = buscarIndice(vetor, nome)
        
        if (validarCadastro !== -1) {
            console.log("Produto já cadastrado")
            continue
        }
        
        do {
            preco = parseFloat(prompt("Qual o preço do produto: "))
        } while (validarValor(preco))
        
        do {
            quantidade = parseInt(prompt("Qual a quantidade em estoque: "))
        } while (validarValor(quantidade))

        vetor[vetor.length] = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }
        
        cadastroProdutos = menuCadastro()
    } while (cadastroProdutos !== 0)
}

function menuCadastro() {
    console.log("Deseja cadastrar mais produtos?")
    console.log("[1] = Sim")
    console.log("[0] = Não")
    return parseInt(prompt("Opção: "))
}

function valorTotalEstoque(vetor) {
    let somaTotal = 0
    for (let i = 0; i < vetor.length; i++) {
        somaTotal += (vetor[i].preco * vetor[i].quantidade)
    }
    console.log("Valor total do estoque:", somaTotal.toFixed(2))
    return somaTotal
}

function mediaPreco(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i].preco
    }
    let media = soma / vetor.length
    console.log("A média de preço de todos os produtos é:", media.toFixed(2))
}

function listarEmEstoque(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].quantidade > 0) {
            console.log("Produto em estoque:")
            console.log("Nome:", vetor[i].nome)
            console.log("Preço:", vetor[i].preco.toFixed(2))
            console.log("Quantidade:", vetor[i].quantidade)
        }
    }
}

function buscarIndice(vetor, nome) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].nome === nome) {
            return i
        }
    }
    return -1
}

function alterarPreco(vetor) {
    let nome = prompt("Qual produto deseja alterar o preço: ")
    let indice = buscarIndice(vetor, nome)
    
    if (indice === -1) {
        console.log("Produto não encontrado! Ação cancelada.")
        return 
    }
    
    let preco
    do {
        preco = parseFloat(prompt("Qual o novo preço: "))
    } while (validarValor(preco))
    
    vetor[indice].preco = preco
    console.log("Preço alterado com sucesso.")
}

function removerProduto(vetor) {
    let rev_nome = prompt("Qual produto deseja remover: ")
    let indice_p = parseInt(buscarIndice(vetor, rev_nome))
    
    if (indice_p === -1) {
        console.log("Produto não encontrado.")
        return
    }
    
    for (let i = indice_p; i < vetor.length - 1; i++) {
        vetor[i] = vetor[i + 1]
    }
    vetor.length = vetor.length - 1
    console.log("Produto removido.")
}

function produtoMaisCaro(vetor) {
    let maior = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].preco >= vetor[maior].preco) {
            maior = i
        }
    }
    console.log("O produto mais caro é:")
    console.log("Nome:", vetor[maior].nome, "- Preço:", vetor[maior].preco.toFixed(2))
}

function contarSemEstoque(vetor) {
    let contador = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].quantidade === 0) {
            contador++
        }
    }
    console.log("Produtos sem estoque:", contador)
}

function buscarProduto(vetor) {
    let nome = prompt("Qual o nome do produto a ser buscado: ")
    let encontrado = buscarIndice(vetor, nome)
    
    if (encontrado == -1) {
        console.log("Produto não cadastrado!!")
        return
    }
    
    console.log("Produto encontrado:")
    console.log("Nome:", vetor[encontrado].nome)
    console.log("Preço:", vetor[encontrado].preco.toFixed(2))
    console.log("Quantidade:", vetor[encontrado].quantidade)
}

function aplicarReajuste(vetor) {
    let valor = parseFloat(prompt("Qual valor deseja adicionar ao preço dos produtos: "))
    for (let i = 0; i < vetor.length; i++) {
        vetor[i].preco = vetor[i].preco + valor
    }
}

function ordenarPorPreco(vetor) {
    let temp = 0
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j].preco < vetor[j + 1].preco) {
                temp = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = temp
            }
        }
    }
}

function validarValor(valor) {
    if (valor >= 0) {
        return false
    } else {
        console.log("Valor inválido!!")
        console.log("O valor não pode ser negativo.")
        return true
    }
}