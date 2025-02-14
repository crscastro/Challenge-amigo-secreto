// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor digitado no campo de texto
    const nomeAmigo = document.getElementById('amigo').value;

    // Verifica se o campo não está vazio
    if (nomeAmigo.trim() !== '') {
        // Cria um novo item de lista (<li>) com o nome do amigo
        const lista = document.getElementById('listaAmigos');
        const itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo;

        // Adiciona o item na lista
        lista.appendChild(itemLista);

        // Limpa o campo de texto
        document.getElementById('amigo').value = '';
    } else {
        // Exibe um alerta se o campo estiver vazio
        alert('Por favor, digite um nome.');
    }
}
