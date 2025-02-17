let amigos = [];  // Lista para armazenar os amigos que serão sorteados
let sorteados = [];  // Lista para armazenar os amigos já sorteados


// Adiciona um amigo à lista de sorteio.
// Verifica se o nome não está vazio e se já não foi adicionado antes.

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome) || sorteados.includes(nome)) {
        alert("Esse nome já foi adicionado antes!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";  // Limpa o campo de entrada
}

// Atualiza a lista de amigos exibida na tela.
// Cria botões para remover nomes individualmente.

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    amigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;
        
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("delete-button");  // Adiciona classe para estilização
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });

    document.getElementById("listaAmigos").style.display = "block"; // Garante que a lista esteja visível
}

// Remove um amigo da lista pelo índice.

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Sorteia um amigo aleatoriamente da lista.
// Se a lista estiver vazia, exibe uma mensagem de alerta.

function sortearAmigo() {
    if (amigos.length === 0 && sorteados.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    if (amigos.length === 0) {
        alert("Todos os nomes foram sorteados!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    sorteados.push(nomeSorteado);
    amigos.splice(indiceSorteado, 1);
    
    atualizarLista();
    ocultarNomes();
    exibirSorteado(nomeSorteado);

    // Se todos os amigos foram sorteados, exibe uma mensagem e reinicia o sorteio
    if (amigos.length === 0) {
        setTimeout(() => {
            alert("Todos os nomes foram sorteados!");
            reiniciarSorteio();
        }, 500);
    }
}

// Oculta a lista de amigos e exibe a área do resultado.

function ocultarNomes() {
    document.getElementById("listaAmigos").style.display = "none"; 
    document.getElementById("resultado").style.display = "block";
}

// Exibe o nome do amigo sorteado com um efeito de fade-in.

function exibirSorteado(nome) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";  // Limpa o conteúdo anterior

    let li = document.createElement("li");
    li.textContent = `🎉 ${nome} foi sorteado!`;
    li.style.opacity = "0"; // Começa invisível
    li.style.transition = "opacity 0.5s ease-in-out"; // Adiciona efeito de transição

    listaResultado.appendChild(li);

    setTimeout(() => {
        li.style.opacity = "1"; // Faz o nome aparecer suavemente
    }, 100);
}

// Reinicia o sorteio, limpando as listas e restaurando a interface.

function reiniciarSorteio() {
    amigos = [];
    sorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("amigo").value = ""; // Limpa o input
}
