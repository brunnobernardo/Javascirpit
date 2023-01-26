let txtvalor = document.getElementById('txtvalor')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = []

function isNumero(n) { // Valida se os números digitados estão entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Verifica se o número está presente ou não na lista, já que se o valor n for encontrado na lista pelo indexof o retorno é de -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(txtvalor.value) && !inLista(txtvalor.value, valores)) { // Só realiza a função de adicionar se for um número entre 1 e 100 (Conforme função isNumero) e se esse numero NÃO estiver na lista(Conforme função inLista)
        valores.push(Number(txtvalor.value)) // Adiciona o valor inserido na caixa ao vetor "valores"
        let item = document.createElement('option')
        item.text = `Valor ${txtvalor.value} adicionado`
        item.value = `tabela ${txtvalor.value}`
        tabela.appendChild(item)
        res.innerHTML = '' // Para limpar o resultado após adição de novo elemento
    } else {
        alert('Valor inválido ou já encontrado dentro da lista')
    }
    txtvalor.value = ''  // Limpa a caixa de texto automaticamente após seu uso
    txtvalor.focus() // Deixa o cursor dentro da caixa automaticamente após o uso
}

function finalizar() {
    if (valores.length == 0) { // Caso a lista esteja vazia, retorno um erro
        alert('Adicione valores antes de finalizar')
    } else {
        let elementos = valores.length
        let maior = valores[0]  // Criação das variáveis 
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) { // Faz uma varredura de todos os valores presentes na lista
            soma += valores[pos] // Faz a soma geral de todos os itens presentes na lista

            if (valores[pos] > maior) // Analisa qual é o maior número da lista 
                maior = valores[pos]
            if (valores[pos] < menor) // Analisa qual é o menor número da lista
                menor = valores[pos]
        }
        media = soma / elementos // Faz a média dos valores

        res.innerHTML = ''
        res.innerHTML = `Ao total temos ${elementos} elementos cadastrados <br>`
        res.innerHTML += `O maior valor informado foi ${maior} <br>`
        res.innerHTML += `O menor valor informado foi o ${menor} <br>`
        res.innerHTML += `Somando os valores, temos ${soma}<br>`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }

}


