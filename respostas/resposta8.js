let pessoas = new Array(5);
let pessoa = [];
let idade = [];
let altura = [];

for (let i = 0; i < pessoas.length; i++) {
    pessoas[i] = new Array(2);
    pessoas[i][0] = prompt('Seu nome ' + i);
    pessoas[i][1] = parseInt(prompt('Sua idade ' + i));
    pessoas[i][2] = parseFloat(prompt('Sua altura ' + i));
    idade = pessoas[i][1];
    altura = pessoas[i][2];
    pessoa += pessoas[i][0] + ',' + altura + 'm' + ',' + idade + ' anos,';
    alert(pessoa);
}