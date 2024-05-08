function exibirAlerta() {
  alert(`Elemento Selecionado`);
}

const elementoUm = document.getElementById("elementoUm").addEventListener("click", exibirAlerta);
const elementoDois = document
  .getElementById("elementoDois")
  .addEventListener("click", exibirAlerta);
const elementoTres = document
  .getElementById("elementoTres")
  .addEventListener("click", exibirAlerta);
const elementoQuatro = document
  .getElementById("elementoQuatro")
  .addEventListener("click", exibirAlerta);
const elementoCinco = document
  .getElementById("elementoCinco")
  .addEventListener("click", exibirAlerta);
