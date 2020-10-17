let alunos = new Array(10);
let soma = 0;
let media = [];

for (let a = 0; a < alunos.length; a++) {
	alunos[a] = new Array(4);
	alunos[a][0] = prompt('Nome do aluno ' + a);
	alunos[a][1] = prompt('Primeira nota ' + a);
	alunos[a][2] = prompt('Segunda nota ' + a);
	alunos[a][3] = prompt('Terceira nota ' + a);
	alunos[a][4] = prompt('Quarta nota ' + a);
	
	soma += 
	media = soma / alunos[a].length;
	alert(soma);
}