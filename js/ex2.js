// 1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. Os ids das caixas são "num_1", "num_2" e "resultado". 
// Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.

var numero1 = document.getElementById("num_1").innerHTML;

var numero2 = document.getElementById("num_2").innerHTML;

var soma = parseInt(numero1) + parseInt(numero2);

document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";

// 2) Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a função usando o valor que está na caixa azul e
// solte o resultado na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

var temperatura_celsius = document.getElementById('caixa_azul').innerHTML;


function conversor_celsius_fahrenheit() {
    fahrenheit = (9 * temperatura_celsius / 5) + 32;

    return fahrenheit
}

var temperatura_convertida = conversor_celsius_fahrenheit();

document.getElementById('caixa_amarela').innerHTML = temperatura_convertida;

// 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. Em
// seguida adicione ao final do novo array mais um grupo composto pelos alunos
// "Mariana", "Felipe" e "Carla".

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];

var grupos2 = [];

// grupos2[0] = grupos[1];
// grupos2[1] = grupos[2];

// grupos2.push(grupos[1]);
grupos2.push(grupos[2]);
grupos2.unshift(grupos[1]);

grupos2.push(["Mariana", "Felipe", "Carla"]);

//4

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

//a) A categoria principal do curso é o primeiro elemento da lista associada à chave
//'categoria'. Solte esta categoria abaixo, no span que tem id "categoria_principal"

var categoria = curso.categoria[0];

document.getElementById('categoria_principal').innerHTML = categoria;

// b) As propriedades n_aval... representam a quantidade de avaliações do curso, de 1 
// até 5 estrelas. Crie dois métodos: um para retornar o total de avaliações do curso e 
// um para retornar a média de estrelas que tem o curso (exemplo: 4.5). Depois utilize-
// os para soltar estas informações nas caixas abaixo, que tem os ids "total_aval" e "media_aval".

function total_avaliacoes() {

    var soma = curso.n_aval_1_estrela + curso.n_aval_2_estrelas + curso.n_aval_3_estrelas + curso.n_aval_4_estrelas + curso.n_aval_5_estrelas;
    return soma;
}



document.getElementById('total_aval').innerHTML = total_avaliacoes();


function media_avaliacoes() {

    var soma = total_avaliacoes();
    var media = soma / 5;

    return media;
}

document.getElementById('media_aval').innerHTML = media_avaliacoes();


//5) Crie um objeto para guardar nome, sobrenome e e-mail de uma pessoa. Em
//seguida, crie uma função que receba o objeto como argumento e retorne um string
//com o html de uma tabela conforme o modelo abaixo. Em seguida Solte o html da
//tabela dentro elemento que tem id="tabela".

var pessoa = {
    'nome': 'Gustavo',
    'sobrenome': 'Eustáqio',
    'email': 'gemtecsi@gmail.com'
};

function criar_tabela(pessoa) {
    var tabelaHTML = '<div class="tableBox">';
    tabelaHTML +=       '<table>';
    tabelaHTML +=           '<tr>';
    tabelaHTML +=              '<th>Nome Completo</th>';
    tabelaHTML +=              '<th>Email</th>';
    tabelaHTML +=           '</tr>';
    tabelaHTML +=           '<tr>';
    tabelaHTML +=              '<td>' + pessoa.nome + ' ' + pessoa.sobrenome + '</td>';
    tabelaHTML +=              '<td>' + pessoa.email + '</td>';
    tabelaHTML +=           '</tr>';
    tabelaHTML +=       '</table>';
    tabelaHTML +=     '</div>';
    return tabelaHTML;

}

var tabela = criar_tabela(pessoa);

document.getElementById("tabela").innerHTML = tabela;