function alterandoModo() {
  // Atribuição Titulo da Página e Corpo
  let titulo = document.getElementById("titulo");
  let body = document.body;
  
  // Altera entre tema claro e escuro
  body.classList.toggle("modo-claro");
  body.classList.toggle("modo-escuro");

  // Condição onde se o tema for escuro seu título deve acompanhar a descrição e vice-versa
  if (body.classList.contains("modo-escuro")) {
    titulo.textContent = "Modo Escuro";
    botao.value = "Alterar Modo Claro";
  } else {
    titulo.textContent = "Modo Claro";
  }
}

// Atribuição botão e inclusão de evento
const botao = document.getElementById("alterarModo").addEventListener("click", alterandoModo);
