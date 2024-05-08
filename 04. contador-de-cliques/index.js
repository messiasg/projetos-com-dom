let quantidadeCliques = 0;

// Função para contar os cliques e atualizar a quantidade na interface
function contandoCliques() {
  quantidadeCliques++; // Incrementa a quantidade de cliques
  // Obtém o elemento onde a quantidade de cliques será apresentada
  const apresentarQuantidadeDeCliques = document.getElementById("apresentarQuantidadeDeCliques");
  // Atualiza o texto do elemento com a quantidade de cliques
  apresentarQuantidadeDeCliques.textContent = quantidadeCliques;
}

// Adiciona um evento de clique ao botão, chamando a função de contagem
const botaoClique = document
  .getElementById("botaoClique")
  .addEventListener("click", contandoCliques);
