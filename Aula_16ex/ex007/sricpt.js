let txtvalor = document.getElementById('txtvalor')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(txtvalor.value) && !inLista(txtvalor.value, valores)) {
        let valores = []
    } else {
        alert('Valor inválido ou já encontrado dentro da lista')
    }
}


