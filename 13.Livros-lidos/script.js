function limparCampos() {
  const tituloLivro = (document.querySelector('input[id="tituloLivro"]').value = "");
  const dataFim = (document.querySelector('input[id="dataFim"]').value = "");
}

const adicionarLivro = document.querySelector('input[type="button"]');

adicionarLivro.addEventListener("click", () => {
  const tituloLivro = document.querySelector('input[id="tituloLivro"]').value;
  const dataFim = document.querySelector('input[id="dataFim"]').value;
  const listaDeLivros = document.querySelector('ul[id="listaDeLivros"]');

  const novoLivro = document.createElement("li");
  novoLivro.innerHTML = `<p>Título do livro: ${tituloLivro} </p><br> <p>Data Fim: ${dataFim} </p><br><br>`;

  listaDeLivros.appendChild(novoLivro);

  limparCampos();
});
