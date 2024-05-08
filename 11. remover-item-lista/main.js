function removendoUltimoItem() {
  const lista = document.getElementById("lista");
  const itens = document.getElementsByTagName("li");
  lista.removeChild(itens[itens.length - 1]);
}

const removerUltimoItem = document
  .getElementById("removerUltimoItem")
  .addEventListener("click", removendoUltimoItem);
