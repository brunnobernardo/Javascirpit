var idade = 15
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 70 ) {
    console.log ('Voto facultativo')
} else {
        console.log('Voto obrigatório')
}
