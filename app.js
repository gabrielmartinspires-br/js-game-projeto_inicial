alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10')

// Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else {
    alert ('Você errou :( ')
}