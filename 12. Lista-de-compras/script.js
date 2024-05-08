// Esta função limpa os campos de entrada após o botão ser clicado
function limparCampos() {
  // Define o valor do campo de entrada 'nomeItem' como uma string vazia
  const nomeItem = (document.querySelector('input[id="nomeItem"]').value = "");
  // Define o valor do campo de entrada 'quantidadeDoItem' como uma string vazia
  const quantidadeDoItem = (document.querySelector('input[id="quantidadeDoItem"]').value = "");
}

// Seleciona o botão na página
const botao = document.querySelector('input[type="button"]');

// Adiciona um ouvinte de evento para o clique no botão
botao.addEventListener("click", () => {
  // Obtém os valores dos campos de entrada 'nomeItem' e 'quantidadeDoItem'
  const nomeItem = document.querySelector('input[id="nomeItem"]').value;
  const quantidadeDoItem = document.querySelector('input[id="quantidadeDoItem"]').value;
  // Seleciona a lista de itens na página
  const listaDeItens = document.querySelector('ul[id="listaDeItens"]');

  // Cria um novo elemento de lista ('li') para o item e atribui conteúdo a ele
  let itemDaLista = document.createElement("li");
  itemDaLista.innerHTML = `<h1>Item: </h1> ${nomeItem} <br> <h2>Quantidade: </h2> ${quantidadeDoItem}`;

  // Adiciona o novo item à lista de itens
  listaDeItens.appendChild(itemDaLista);

  // Chama a função para limpar os campos de entrada
  limparCampos();
});
