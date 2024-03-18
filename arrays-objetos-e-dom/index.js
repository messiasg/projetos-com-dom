function realizandoLoop() {
  // Atribuindo valores
  const inicioLoop = document.getElementById("inicioLoop").value;
  const fimLoop = document.getElementById("fimLoop").value;
  const listaLoop = document.getElementById("listaLoop");
  
  // Loop for
  for (let i = inicioLoop; i < fimLoop; i++) {
    let linhaLoop = document.createElement("li");
    linhaLoop.textContent = `Índice: ${i}`;
    listaLoop.appendChild(linhaLoop);
  }
}

// Adicionando evento ao botão
const botao = document.getElementById("botao").addEventListener("click", realizandoLoop);
