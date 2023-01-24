let num = [5,8,2,9,3]
num.push(1) // Adiciona o número 1 na última posição do vetor
num.sort() // Organizou o array em ordem crescente 
console.log(num)
console.log(`o vetor tem ${num.length} posições `) // num.length apresentou o comprimento do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostrou o primeiro elemento presente no vetor
let pos = num.indexOf(8) // Busca um valor dentro do array
if (pos == -1) { // Caso o valor não esteja presente na tabela
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor procurado está na posição ${pos}`)
}
