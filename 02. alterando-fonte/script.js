// Obtém o elemento do botão responsável por alterar a fonte
const AlterarFonteBtn = document.getElementById("AlterarFonteBtn");

// Adiciona um ouvinte de evento de clique ao botão
AlterarFonteBtn.addEventListener("click", () => {
  // Obtém o primeiro elemento 'span' no documento
  const span = document.querySelector("span");
  
  // Define o atributo de classe do elemento 'span' como 'fonteAlterada'
  span.setAttribute("class", "fonteAlterada");
});
