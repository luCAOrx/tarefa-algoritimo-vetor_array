let numero = [1,2,3,4,5,6,7,8,9,10];

let inverso = [];

let tamanho_vetor = numero.length;

for (let i = 0; i < tamanho_vetor; i++) {
    inverso[i] = numero.pop();
}

alert(inverso);

/*
let numeros = [5,10,15,20,25,30];
//let vetorInverso = numeros.reverse();
let vetorInverso = [];
let contador = 0;

for (let i = numeros.length-1; i >= 0; i--) {
    vetorInverso[contador] = numeros[i];
    contador++;
}
alert('vetorInverso');
*/