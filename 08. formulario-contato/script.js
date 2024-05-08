// Obtendo o elemento form e incluindo um evento quando o formulário for submimitido
const formularioDeContato = document.getElementById("formularioDeContato");

formularioDeContato.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector('input[id="nome"]').value;
  const email = document.querySelector('input[id="email"]').value;
  const telefone = document.querySelector('input[id="telefone"]').value;

  // Incluindo em um ojeto os valores dos campos digitados pelo usuário
  const dadosDoUsuario = {
    nome: nome,
    email: email,
    telefone: telefone,
  };

  // Incluindo as informações dinamicamente na página
  const div = document.getElementById("incluirContato");
  div.innerHTML = `<h1>Nome:</h1> ${dadosDoUsuario.nome} <br> <h1>E-mail:</h1> ${dadosDoUsuario.email} <br> <h1>Telefone:</h1> ${dadosDoUsuario.telefone}`;
});
