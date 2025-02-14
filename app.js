// Lista para armazenar os amigos adicionados
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo); // Adiciona o nome à lista
        atualizarLista(); // Atualiza a exibição da lista
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;

        // Criar botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('botao-remover');
        botaoRemover.onclick = function () {
            amigos.splice(index, 1); // Remove o amigo da lista
            atualizarLista(); // Atualiza a lista na tela
        };

        itemLista.appendChild(botaoRemover);
        lista.appendChild(itemLista);
    });

    // Exibe ou oculta a lista
    lista.style.display = amigos.length > 0 ? 'block' : 'none';
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    // Oculta a lista ao iniciar o sorteio
    document.getElementById('listaAmigos').style.display = 'none';

    // Seleciona um nome aleatório e o remove da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove e retorna o nome

    // Exibir apenas o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado">Sorteado: <strong>${nomeSorteado}</strong></li>`;

    // Se todos os nomes foram sorteados, exibir mensagem e reiniciar
    if (amigos.length === 0) {
        setTimeout(() => {
            alert('Todos os nomes foram sorteados!');
            reiniciarSorteio();
        }, 600);
    }
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = []; // Limpa a lista de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Remove os itens da lista na tela
    document.getElementById('resultado').innerHTML = ''; // Limpa o sorteado
    document.getElementById('listaAmigos').style.display = 'block'; // Reexibe a lista
}
