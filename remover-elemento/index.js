function removendoIndice() {
  // Atribuição dos elementos do DOM
  const lista = document.getElementById("lista");
  const itensLista = document.getElementsByTagName("li");
  const indiceRemovido = document.getElementById("indice").value - 1;

  // Remoção do indice designado pelo usuário
  lista.removeChild(itensLista[indiceRemovido]);
}

// Atribuição do botão e inclusão do evento click
const botao = document.getElementById("botao").addEventListener("click", removendoIndice);
