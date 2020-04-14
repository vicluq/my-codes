
function notas () {

	this.nota1 = 9.4;
	this.nota2 = 8.7;
	this.nota3 = null;
	this.media = function (nota1, nota2, nota3) {

		return (nota1 + nota2 + nota3)/3;
	}


}

//instanciando

const objNotas = new notas();

console.log(objNotas);

objNotas.nota3 = 9.5;

console.log(objNotas);
console.log((objNotas.media(objNotas.nota1, objNotas.nota2, objNotas.nota3)).toFixed(1));