function ocultandoElemento() {
  const texto = (document.getElementById("texto").style.display = "none");
}

function exibindoElemento() {
  const texto = (document.getElementById("texto").style.display = "block");
}
const ocultarTexto = document
  .getElementById("ocultarTexto")
  .addEventListener("click", ocultandoElemento);

const exibirTexto = document
  .getElementById("exibirTexto")
  .addEventListener("click", exibindoElemento);
