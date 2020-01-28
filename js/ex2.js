// 1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. Os ids das caixas são "num_1", "num_2" e "resultado". 
// Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.

var numero1 = document.getElementById("num_1").innerHTML;

var numero2 = document.getElementById("num_2").innerHTML;

var soma = parseInt(numero1) + parseInt(numero2);

document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";

// 2) Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a função usando o valor que está na caixa azul e
// solte o resultado na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

var temperatura_celsius = document.getElementById('caixa_azul').innerHTML;

console.log(typeof(temperatura_celsius));