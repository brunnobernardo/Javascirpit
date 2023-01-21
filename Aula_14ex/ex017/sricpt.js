function calcular() {
    let txtn = document.getElementById('txtn')
    let numero = Number(txtn.value)
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    res.innerHTML = `Tabuada do ${numero}`

    if (txtn.value.length == 0) {
        alert('Digite algum número para realizar a conta')
    } else {
        tab.innerHTML = '' // Para limpar o select antes de mostrar a próxima tabuada
        for (let c = 1; c <= 10; c++) {
            let calculo = c * numero // Opicional, podemos fazer essa conta direto no item.text = `${c} X ${numero} = ${c * numero}`
            let item = document.createElement('option')
            item.text = `${c} X ${numero} = ${calculo}`
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }

}