function inclusaoImagemVermelho() {
  // Localizando elemento pai
  const pai = document.getElementById("inclusaoImagem");

  // Criando novo elemento e adicionando novas características
  const imgVermelho = document.createElement("img");
  imgVermelho.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXuFj+u+FiaAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC";
  imgVermelho.id = "imgVermelho";

  // Ajustando seu estilo
  imgVermelho.style.height = "180px";
  (imgVermelho.style.width = "180px"),
    // Vinculando ao elemento pai
    pai.appendChild(imgVermelho);
}

function inclusaoImagemVerde() {
  // Localizando elemento pai
  const pai = document.getElementById("inclusaoImagem");

  // Criando novo elemento e adicionando novas características
  const imgVerde = document.createElement("img");
  imgVerde.src =
    "https://img.freepik.com/fotos-premium/textura-de-papel-verde-claro-telha-de-fundo-quadrado-sem-costura-lida_463999-4774.jpg";
  imgVerde.id = "imgVerde";

  // Ajustando seu estilo
  imgVerde.style.height = "180px";
  imgVerde.style.width = "180px";

  // Vinculando ao elemento pai
  pai.appendChild(imgVerde);
}

function inclusaoImagemAzul() {
  // Localizando elemento pai
  const pai = document.getElementById("inclusaoImagem");

  // Criando novo elemento e adicionando novas características
  const imgAzul = document.createElement("img");
  imgAzul.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAA1BMVEUnhsBsxZDCAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOA8XBAAGwGMP0AAAAAElFTkSuQmCC";
  imgAzul.id = "imgAzul";

  // Ajustando seu estilo
  imgAzul.style.height = "180px";
  imgAzul.style.width = "180px";

  // Vinculando ao elemento pai
  pai.appendChild(imgAzul);
}

const vermelho = document
  .getElementById("vermelho")
  .addEventListener("click", inclusaoImagemVermelho);
const verde = document.getElementById("verde").addEventListener("click", inclusaoImagemVerde);
const azul = document.getElementById("azul").addEventListener("click", inclusaoImagemAzul);
