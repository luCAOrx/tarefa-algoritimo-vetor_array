let numeros = [1,2,3,4,5];
let quantidade = numeros.length;
let soma = 0;
let multiplicacao = 0;

for (let i = 0; i < quantidade; i++) {
    soma += numeros[i];
    multiplicacao += quantidade * numeros[i];
}
alert(numeros);
alert(soma);
alert(multiplicacao);