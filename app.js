let listaDeNumero = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero de 1 a 10');
}
 exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        exibirTextoNaTela('h1', 'Acertou!!!!!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limparCampo();
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior')
        };
    }
    tentativas++;

};

function gerarNumeroAleatorio (){
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementos = listaDeNumero.length;

     if (quantidadeDeElementos == numeroLimite){
        listaDeNumero = [];
     }
     if (listaDeNumero.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
     } else {
        listaDeNumero.push(numeroEscolhido)
        return numeroEscolhido
     }

};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
