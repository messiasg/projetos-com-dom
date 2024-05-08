// Seleciona o elemento do botão com o ID "botao" e adiciona um listener de evento "click"
const botao = document.getElementById("botao").addEventListener("click", () => {
  // Quando o botão é clicado, executa as seguintes ações:

  // Altera a cor do texto do elemento com o ID "titulo" para branco
  document.getElementById("titulo").style.color = "#ffffff";

  // Altera a cor do texto do elemento com o ID "texto" para branco
  document.getElementById("texto").style.color = "#ffffff";

  // Altera a cor de fundo do documento (body) para preto
  document.body.style.backgroundColor = "black";
});
