let amigos = [];
let sorteados = [];
let nomes = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
   
    function exibirMensagemInicial() {
        exibirTextoNaTela('h1', 'Amigo secreto');
        exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    }

    exibirMensagemInicial();

    function adicionarAmigo() {

        const input = document.getElementById('amigo');
        let nomeDoAmigo = input.value.trim();

    if (nomeDoAmigo === '' || !isNaN(nomeDoAmigo)) {
        alert('Por favor, insira um nome válido!');
        return;

    } if (amigos.includes(nomeDoAmigo)) {
        alert('O nome já foi adicionado!');
        return;
    }

    amigos.push(nomeDoAmigo);
    atualizarListaDeAmigos();
    limparCampo();
    }

function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    (lista.innerHTML = '');

    amigos.forEach((amigo,index) => {
   const li = document.createElement('li');
    li.textContent = amigo + (index < amigos.lenght - 1 ? ',' : '');
    lista.appendChild(li);
    });
   
}



function limparCampo() {
   document.getElementById('amigo').value = '';
}

    function sortearAmigo() {
        if(amigos.length === 0) {
            alert('A lista de amigos está vazia!');
            return;
        }
         else if (amigos.length  < 2) {
            alert('Adicione pelo menos 2 amigos para sortear!');
            return;
        } 

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    sorteados.push(amigoSorteado);


        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 'O amigo secreto sorteado é:' + sorteados; 
        sorteados = [];
        atualizarListaDeAmigos();
    }
    