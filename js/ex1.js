//Ex01
console.log("O arquivo ex1.js está funcionando\n\n\n");

//Ex02
var nome02 = "Gustavo";
var idade02 = 27;

console.log("Olá, eu me chamo " + nome02 + " tenho " + idade02 + " anos e estou estudando Javascript\n\n\n");

//Ex03
var nome03 = 'Gustavo';
var matricula03 = 12033697;
var notaProva01 = 25;
var notaProva02 = 30;

var media = (notaProva01 + notaProva02) / 2;

console.log("O aluno " + nome03 + ", matrícula " + matricula03 + ", obteve a média final " + media + ".\n\n\n");

//Ex04
var telefone = "99957462";

console.log(telefone.length == 9);

if (telefone.length == 9) {
    console.log("\n\nResultado do teste true");
}

else{
    console.log("\n\nResultado do teste false");
}

//Ex05
console.log(Math.pow(32,6));

//Ex06
// a) var NOME;

// b) var $num1;

// c) var typeof; -- Ilegal, pois o é um no

// d) var nome-aluno;

// e) var tentativa_2;

// f) var 2a_tentativa;

// g) var nome completo;

console.log("\n\n\n");

//Ex07
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); //2525
console.log( (7+5) / numero + 2 );  //4
console.log(pressao); //undefined
console.log(temperatura); //null
console.log(typeof pressao); //undefined
console.log(typeof temperatura); //object

console.log("\n\n\n");

//Ex08
var idade = 65;

console.log(idade != 65); //false
console.log(idade >= 65); //true
console.log("65" == idade); //true
console.log(65 !== idade); //false
console.log(typeof (idade > 60)); //boolean
console.log(typeof (idade > 70)); //boolean

 