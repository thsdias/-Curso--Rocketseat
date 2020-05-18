
/* ------------------------------------------------------------------------------------------------------
1º exercício:
Retornar o seguinte conteúdo:
    O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
------------------------------------------------------------------------------------------------------ */

console.log('Exercicio 1:');

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var enderecoUsuario = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`;
console.log(enderecoUsuario);
gerarSeparador();



/* ------------------------------------------------------------------------------------------------------
2º exercício:
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
    function pares(x, y) {
        // código aqui
    }
    pares(32, 321);
------------------------------------------------------------------------------------------------------ */

console.log('Exercicio 2:');

function pares(x, y) { 
    var numPares = new Array();
    for (let i = x; i < y; i++) {
        if(i % 2 == 0) 
           numPares.push(i);
    }

    return numPares;
}

console.log('Números Pares: ' + pares(32, 321));
gerarSeparador();



/* ------------------------------------------------------------------------------------------------------ 
3º exercício:
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
    function temHabilidade(skills) {
        // código aqui
    }

    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
------------------------------------------------------------------------------------------------------ */

console.log('Exercicio 3:');

function temHabilidade(skills) {
    if(skills.indexOf('Javascript') == 0) 
        return true;
    else
        return false;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

gerarSeparador();



/* ------------------------------------------------------------------------------------------------------
4º exercício:
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
    function experiencia(anos) {
        // código aqui
    }
    var anosEstudo = 7;
    experiencia(anosEstudo);
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
------------------------------------------------------------------------------------------------------ */

console.log('Exercicio 4:');

function experiencia(anos) {
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master

   console.log(anos);

    if (anos >= 7) {
        return 'Jedi Master';
    } else if (anos < 7 && anos >= 3) {
        return 'Avançado';
    } else if (anos < 3 && anos >= 1) {
        return 'Intermediário';
    } else if (anos < 1 && anos >= 0){
        return 'Iniciante';
    } else {
        return 'Sem experiência';
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
var anosEstudo = 3;
console.log(experiencia(anosEstudo));
var anosEstudo = -5;
console.log(experiencia(anosEstudo));
gerarSeparador();



/* ------------------------------------------------------------------------------------------------------
5º exercício:
Dado o seguinte vetor de objetos:
    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.
------------------------------------------------------------------------------------------------------ */

console.log('Exercicio 5:');

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (const usuario of usuarios) {
    console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`);
}


function gerarSeparador() {
    console.log();
    console.log('-----------------------------------------------------------------------------------------------');
    console.log();
}
