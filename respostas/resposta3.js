let notas = [5,15,20,14];
let soma = 0;
let quantidade = notas.length;

for (let i = 0; i < quantidade; i++) {
    soma += notas[i];
}

let media = soma / quantidade;

alert ('Notas: ' + notas.join(' - ') + '\n' + 'Média: ' + media.toFixed(2));