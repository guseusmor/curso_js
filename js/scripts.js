//Aula 3 Variáveis

// var latitude = 40.87663;
// var longitude = -8.08373;

// console.log(latitude);
// console.log(longitude);


//Aula 4 - Strings

// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";


// console.log(nome + ' ' + sobrenome);

// console.log('(' + ddd + ')' + "-" + telefone);

// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('Última letra do nome: ' + nome[3]);

// console.log('Número de caracteres do telefone: ' + telefone.length);

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A média é: ' + media);

// console.log(Math.pow(2,4));

// increment = 1;
// increment += 5;
// console.log(increment);

// increment = 10;
// increment++;
// console.log(increment);

// var ddd = 21;
// var telefone = 999574626;

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log(ddd_string + tel_string);

// var idade = '17';

// idade = parseInt(idade);
// idade++;
// console.log(idade);


//alert('Teste');

// var idade = 65;
// var teste = idade !== 65; //Comparador de tipos "==="

// console.log(teste);

// var vtype = 65;

// console.log(typeof vtype == "number");

// var undf;

// console.log(typeof undf);

// var nome = "Pedro";

// console.log(nome[5]);

// var temperatura =  35;

// console.log(temperatura);

// temperatura = null;

// console.log(temperatura);

// console.log(typeof temperatura);

// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa

// var conteudo_caixa_azul = document.getElementById("caixa_azul").innerHTML;

//document.getElementById("caixa_azul").innerHTML = '<h1>'+ conteudo_caixa_azul + '</h1>';

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

///////////////////////////////////////////Aula 11 - Funções////////////////////////////////////////

// function soma_numeros(){
//     var x = 5;
//     var y = 2;

//     var soma = x + y;

//     console.log(soma);
// }

// soma_numeros();

// function soma_args(num1, num2){
//     var somar = num1 + num2;

//     return somar;
// }

// soma_args(25,25);

// soma_args(1,100);

// console.log(soma_args(10,10));

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// // agora podemos guardar o valor retornado pela função numa variável e usá-la como quisermos.

// var meu_peso = 72;
// var minha_altura = 1.70;

// var meu_imc = valor_imc(meu_peso,minha_altura);

// console.log(meu_imc);

// // Agora esta variável meu_imc poderia também ser colocada num elemento HTML ou ser usada em outros cálculos, 
// // como por exemplo numa função que dirá se o IMC calculado está dentro ou fora dos valores normais.

// var peso = parseFloat(document.getElementById("peso").innerHTML);

// var altura = parseFloat(document.getElementById("altura").innerHTML);

// var imc = valor_imc(peso,altura);

// document.getElementById("imc").innerHTML = imc.toFixed(2);

// console.log(typeof peso);

///////////////////////////////////////////Aula 12 - ////////////////////////////////////////

// var alunos = ["João","Maria","José"];
// var num_primos = [2,3,5,7,11,13];

// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);


// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[1]);
// console.log(grupos[1][0]);

// var cursos = ["HTML", "Python", "PHP"];

// cursos.push("Javascript");

// cursos.pop();

// cursos.unshift("Bootstrap");

// cursos.shift();

// console.log(cursos);

// var ingredientes = ["pão branco", "queijo", "presunto"];

// ingredientes[0] = "Pão Integral";

// var alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];

// console.log(alunos.slice(0, 3));

// console.log(alunos.slice(0, -2));

// console.log(alunos.slice(-2));

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

funcionario.cargo = "Gerente de Projeto";
funcionario.cnh = "1205150454084";

console.log(funcionario.cargo);
console.log(funcionario.cnh);


var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

console.log(cursos[1]['categorias'][0] + "\n");
console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = "Administração de empresas";

console.log(cursos[2].categorias[1]);

console.log(cursos);