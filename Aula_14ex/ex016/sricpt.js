function contar() {
    let txti = document.getElementById('txti')
    let txtf = document.getElementById('txtf')
    let txtp = document.getElementById('txtp')
    let i = Number(txti.value)
    let f = Number(txtf.value)
    let p = Number(txtp.value)
    let res = document.getElementById('res')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1 
        }
        if (i < f) {
            // Contagem crescente 
            for (let c = i; c <= f;c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
        }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
  
}



