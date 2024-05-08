// Função para limpar campos
function limparCampos() {
  document.querySelector('input[id="nomeTecnologia"]').value = "";
  const radios = document.querySelectorAll('input[name="main"]:checked');
  radios.forEach(radio => radio.checked = false);
}

// Função para lidar com o envio do formulário
function handleFormSubmit(ev) {
  ev.preventDefault();

  const nomeTecnologia = document.querySelector('input[id="nomeTecnologia"]').value;
  const experiencia = document.querySelector('input[name="main"]:checked').value;
  const tecnologia = [nomeTecnologia, experiencia];
  
  console.log(tecnologia);
  limparCampos();
}

// Função para adicionar nova tecnologia
function adicionarNovaTecnologia() {
  const novaTecnologia = document.querySelector('section[id="novaTecnologia"]');
  const contador = novaTecnologia.children.length + 1;

  const novaLinha = document.createElement("div");
  novaLinha.id = "tecnologiaETempoDeExperiencia" + contador;
  novaLinha.innerHTML = `
    <input type="text" id="nomeTecnologia">
    <input type="radio" name="main${contador}" id="experienciaOa2Anos" value="0-2 anos"><label for="experienciaOa2Anos">0-2 anos</label>
    <input type="radio" name="main${contador}" id="experiencia3a4Anos" value="3-4 anos"><label for="experiencia3a4Anos">3-4 anos</label>
    <input type="radio" name="main${contador}" id="experiencia5AnosOuMais" value="5+ anos"><label for="experiencia5AnosOuMais">5+ anos</label>
    <input type="button" id="removerLinha${contador}" value="Remover Tecnologia">
  `;

  novaTecnologia.appendChild(novaLinha);

  const removerLinha = document.querySelector(`input[id="removerLinha${contador}"]`);
  removerLinha.addEventListener("click", () => {
    const tecnologiaETempoDeExperiencia = document.querySelector(`div[id="tecnologiaETempoDeExperiencia${contador}"]`);
    tecnologiaETempoDeExperiencia.remove();
  });
}

// Adiciona ouvintes de eventos
document.querySelector("form").addEventListener("submit", handleFormSubmit);
document.querySelector('input[id="adicionarNovaTecnologia"]').addEventListener("click", adicionarNovaTecnologia);