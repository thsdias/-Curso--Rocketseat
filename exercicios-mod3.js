var principal = document.querySelector('#principal');

exercicioII();


/* ------------------------------------------------------------------------------------------------------
1º exercício:
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
    function checaIdade(idade) {
        // Retornar uma promise
    }
    checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });    
------------------------------------------------------------------------------------------------------ */

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            setTimeout(2000, resolve());
        } else {
            setTimeout(2000, reject());
        }
    });
}

checaIdade(15)
.then(function() {
    console.log("Maior que 18");
})
.catch(function() {
    console.log("Menor que 18");
}); 



/* ------------------------------------------------------------------------------------------------------ 
2º exercício:
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
    <input type="text" name="user">
    <button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
    <ul>
        <li>repo1</li>
        <li>repo2</li>
        <li>repo3</li>
        <li>repo4</li>
        <li>repo5</li>
    </ul>


3º exercício:
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
    <li>Carregando...</li>
    Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
    Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
------------------------------------------------------------------------------------------------------ */

function exercicioII() { 
    var inputText = document.createElement('input');
    var btnBuscar = document.createElement('button');
    var lblButton = document.createTextNode('Buscar');
    var dvResultado = document.createElement('div');
    var tagUL = document.createElement('ul');
    var tagLI = "";
        
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('name', 'user');
    inputText.setAttribute('id', 'txtNome');
    dvResultado.setAttribute('class', 'conteudo');

    btnBuscar.appendChild(lblButton);
    btnBuscar.addEventListener('click', () => { 
        limparLista();
        tagLI = document.createElement('li');
        tagLI.appendChild(document.createTextNode('Carregando...'));
        tagUL.appendChild(tagLI);
        dvResultado.appendChild(tagUL);        

        gitUser = new Promise(function(resolve, reject) { 
            var nome = document.getElementById('txtNome').value;

            if (nome !== undefined && nome !== '') { 
                var xhr = new XMLHttpRequest();
                xhr.open('GET', `https://api.github.com/users/${nome}/repos`);
                xhr.send(null);

                xhr.onreadystatechange = () => { 
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText));
                        } else { 
                            limparLista();
                            if (xhr.status === 404) {
                                reject('Usuário não encontrado no GitHub!');
                            } else {
                                reject('Erro na requisicao');
                            }
                        }
                    }
                }
            } else {
                limparLista();
                return reject('O nome do usuário é obrigatório!');
            }             
        });
        gitUser
        .then(function(response){
            console.log(response);            
            limparLista();
            for (const key in response) {
                if (response.hasOwnProperty(key)) {
                    const element = response[key];
                    tagLI = document.createElement('li');
                    tagLI.appendChild(document.createTextNode(JSON.stringify(element.url)));
                    tagUL.appendChild(tagLI);
                }
            }

            dvResultado.appendChild(tagUL);
        })
        .catch(function(error){             
            alert(error);
        })
    });
        
    principal.appendChild(inputText);
    principal.appendChild(btnBuscar);
    principal.appendChild(dvResultado);
}

function limparLista() {
    var ul = document.querySelector('ul'); 
    if (ul !== undefined && ul !== null) {
        var child = ul.lastElementChild;  
        while (child) { 
            ul.removeChild(child); 
            child = ul.lastElementChild; 
        }    
    } 
} 
