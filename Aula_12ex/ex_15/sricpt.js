function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) { // Se o usário entrar no formulário com uma data inválida
        alert('[ERRO] Verifique o ano digitado')
    } else { // Caso esteja certo o input do usário no formulário
        var fsexo = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // == <img></img>
        img.setAttribute('id' ,'foto') // == <img id="foto"></img>
        
        if (fsexo[0].checked) { // Caso seja homem
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bbm.png')
                // Crinça
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovemm.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adultom.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosom.png')
                //Idoso
            }

        } else if (fsexo[1].checked) { // Caso seja Mulher
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bbf.png')
                // Crinça
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovemf.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adultof.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosof.png')
                //Idoso
            }
        }
    }

    res.style.textAlign = 'center'  // Centralizou a resposta
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos` // Escreveu a resposta
    res.appendChild(img) // Para linkar a nova tag img criado no JS
}