let amigo = {nome: 'José',
sexo: 'M',
peso: 75.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.peso}KG`)