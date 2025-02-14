// Função para adicionar amigo
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;    // Captura o valor digitado no campo de texto

    // Verifica se o campo não está vazio
    if (nomeAmigo.trim() !== '') {
        const lista = document.getElementById('listaAmigos');   // Cria um novo item de lista (<li>) com o nome do amigo
        const itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo;
    
        // Criar botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('botao-remover'); // Classe para estilização
        botaoRemover.onclick = function () {
            lista.removeChild(itemLista);
        };

        // Adiciona o botão ao item da lista
        itemLista.appendChild(botaoRemover);    
        
        // Adiciona o item na lista
        lista.appendChild(itemLista);

        // Limpa o campo de texto
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, digite um nome.');        // Exibe um alerta se o campo estiver vazio
    }
}

