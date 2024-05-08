// Função para alternar entre os estilos de modo padrão e modo Drácula
function alterandoEstilo() {
  // Alternando a classe do corpo do documento para modo Drácula
  document.body.classList.toggle("modoDracula");
}

// Selecionando o botão e adicionando um ouvinte de evento para o clique
const botao = document.getElementById("botao").addEventListener("click", alterandoEstilo);

