var principal = document.querySelector('#principal');

exercicioI();
exercicioIV();
exercicioIII();


/* ------------------------------------------------------------------------------------------------------
1º exercício:
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
------------------------------------------------------------------------------------------------------ */ 

function exercicioI() { 
    var divBtn = document.createElement('div');
    var divQuadrado = document.createElement('div');

    var btnInserir = document.createElement('button');
    var textoInserirBtn = document.createTextNode('Inserir');

    var btnRemoverInic = document.createElement('button');
    var textoRemoverInicBtn = document.createTextNode('Remover Inicio');
    
    var btnRemoverFim = document.createElement('button');
    var textoRemoverFimBtn = document.createTextNode('Remover Fim');
    
    var btnRemoverTodos = document.createElement('button');
    var textoRemoverTodosBtn = document.createTextNode('Remover Todos');   

    divBtn.classList.add('divBotao');
    divQuadrado.classList.add('divQuadrado');
    
    btnInserir.appendChild(textoInserirBtn);
    divBtn.appendChild(btnInserir);

    btnRemoverInic.appendChild(textoRemoverInicBtn);
    divBtn.appendChild(btnRemoverInic);
    
    btnRemoverFim.appendChild(textoRemoverFimBtn);
    divBtn.appendChild(btnRemoverFim);
    
    btnRemoverTodos.appendChild(textoRemoverTodosBtn);
    divBtn.appendChild(btnRemoverTodos);

    principal.appendChild(divBtn);
    principal.appendChild(divQuadrado);
                    
    btnInserir.onclick = function() {
        var valorNumr = "";
        var quadrado = document.createElement('div');
        var numero = document.createElement('p');
        var total = document.getElementsByClassName('quadrado');

        if (total !== undefined) { 
            if (total.length > 0) {
                valorNumr = parseInt(total[total.length -1].innerText) + 1
                valorNumr = document.createTextNode(valorNumr);
            } else {
                valorNumr = document.createTextNode(total.length + 1);
            }          
        } else {
            valorNumr = document.createTextNode('1');
        }

        numero.classList.add('numeros');
        numero.appendChild(valorNumr);
        quadrado.appendChild(numero);

        quadrado.classList.add('quadrado');
        quadrado.addEventListener('mouseover', () => quadrado.style.background = exercicioII());
        divQuadrado.appendChild(quadrado);
    }    
    
    btnRemoverTodos.onclick = function() { 
        var divQuadrado = document.querySelector('.divQuadrado');
        divQuadrado.innerText = "";
    }

    btnRemoverInic.onclick = function() {
        var divQuadrado = document.querySelector('.divQuadrado');
        var quadrado = document.getElementsByClassName('quadrado');
        if (quadrado !== undefined && quadrado.length > 0) {
            divQuadrado.removeChild(quadrado[0]);   
        }                    
    }

    btnRemoverFim.onclick = function() {
        var divQuadrado = document.querySelector('.divQuadrado');
        var quadrado = document.getElementsByClassName('quadrado');
        if (quadrado !== undefined && quadrado.length > 0) {
            divQuadrado.removeChild(quadrado[(quadrado.length -1)]);
        }                    
    }
}



/* ------------------------------------------------------------------------------------------------------
2º exercício:
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
    function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var newColor = getRandomColor(); // #E943F0
------------------------------------------------------------------------------------------------------ */

function exercicioII() { 
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}



/* ------------------------------------------------------------------------------------------------------
3º exercício:
A partir do seguinte vetor:
    var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    ● Diego
    ● Gabriel
    ● Lucas
------------------------------------------------------------------------------------------------------ */ 

function exercicioIII() {     
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var tagDiv = document.createElement('div');
    var tagUL = document.createElement('ul');  
    
    tagUL.classList.add('listaNomes')                
    tagDiv.classList.add('divPadrao');

    nomes.forEach(element => {
        var tagLI = document.createElement('li');
        var conteudo = document.createTextNode(element);
        tagLI.appendChild(conteudo);
        tagUL.appendChild(tagLI);
    });

    tagDiv.appendChild(tagUL);
    principal.appendChild(tagDiv);
}


/* ------------------------------------------------------------------------------------------------------
4º exercício:
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
    <input type="text" name="nome">
    <button onClick="adicionar()">Adicionar</button>

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
------------------------------------------------------------------------------------------------------ */

function exercicioIV() { 
    var tagDiv = document.createElement('div');
    var campoInput = document.createElement('input');
    var btnAdd = document.createElement('button');
    var textoBtn = document.createTextNode('Adicionar');

    campoInput.setAttribute('type', 'text');
    campoInput.setAttribute('name', 'nome');
    campoInput.setAttribute('id', 'txtNome');

    btnAdd.appendChild(textoBtn);
    btnAdd.addEventListener('click', () => {
        var tagUL = document.querySelector('.listaNomes');
        if (tagUL !== undefined) {
            var desc = document.createTextNode(document.getElementById('txtNome').value);

            if (desc == undefined || desc.textContent === '' ) {
                alert('Informe um Nome antes de adicionar');
            } else {
                var tagLI = document.createElement('li');
                tagLI.appendChild(desc);
                tagUL.appendChild(tagLI);
            }
            
            document.getElementById('txtNome').value = '';
        }
    });

    tagDiv.classList.add('divPadrao');
    tagDiv.appendChild(campoInput);
    tagDiv.appendChild(btnAdd);

    principal.appendChild(tagDiv);    
}
