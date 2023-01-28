// 5!  = 5 x 4 x 3 x 2 x 1 = 120
/*
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
*/

let valores = [8, 5, 7, 1]
let soma = 0
let  maior = valores[0]
let  menor = valores[0]
for (let pos in valores) { // == for (let pos = 0; pos < valores.length; pos ++)
    soma += valores[pos]
    console.log(`Indíce ${pos}  valor ${valores[pos]}`)
    if (valores[pos] > maior)
    maior = valores[pos]
    if (valores[pos] < menor)
    menor = valores[pos] 
}

console.log(`A soma da lista é ${soma}`)
console.log(`o maior número da lista é ${maior}`)
console.log(`o menor número da lista é ${menor}`)

