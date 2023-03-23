 function verificaSeOChutePossuiUmValorValido(chute){
    const numero =+ chute
    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
                `
                document.body.style.backgroundColor = "#DF2E38";
                document.body.style.backgroundImage =  "url(gameOver.png)";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";

        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }



  if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale o número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})
