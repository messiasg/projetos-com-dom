// Seleciona o formulário pelo seu ID
const form = document.getElementById("form");

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener("submit", function (ev) {
  // Impede o comportamento padrão do formulário de ser enviado
  ev.preventDefault();

  // Obtém os valores dos campos de entrada de usuário, senha e confirmação de senha
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const confirmacaoSenha = document.getElementById("confirmacaoSenha").value;

  // Verifica se a senha e a confirmação de senha são iguais
  if (senha === confirmacaoSenha) {
    // Se forem iguais, exibe uma mensagem de boas-vindas ao usuário
    alert(`Seja bem-vindo ${usuario}!`);
  } else {
    // Se não forem iguais, exibe uma mensagem de erro de autenticação
    alert(`Erro na autenticação, por favor insira sua senha novamente.`);
  }
});
