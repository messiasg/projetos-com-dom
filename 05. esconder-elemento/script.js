const botaoEsconder = document.getElementById("botaoEsconder");

botaoEsconder.addEventListener("click", () => {
  const imagemFluxograma = document.getElementById("imagemFluxograma");
  imagemFluxograma.classList.toggle("displayInativo");
  imagemFluxograma.classList.toggle("displayAtivo");
});
