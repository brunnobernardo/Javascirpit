var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamante ${hora} horas`)
if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 23){
    console.log ('Boa noite!')
} else {
    console.log ('Boa madrugada!')
}

