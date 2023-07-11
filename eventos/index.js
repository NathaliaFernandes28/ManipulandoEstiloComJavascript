const buttonClick = document.getElementById("MouseClick");

function fingerClick() {
  alert("Botao clicado!");
  console.log("Botao clicado!");
}

buttonClick.addEventListener("click", fingerClick);

const buttonOver = document.getElementById("MouseMouseOver");

function fingerMouseOver() {
  alert("Pointer do mouse foi passado por cima do elemento!");
  console.log("Pointer do mouse foi passado por cima do elemento!");
}

buttonOver.addEventListener("mouseover", fingerMouseOver);

const buttonMove = document.getElementById("MouseMouseOut");

function fingerMouseOut() {
  alert("Voce tirou o  pointer do mouse do elemento!");
  console.log("Voce tirou o  pointer do mouse do elemento!");
}

buttonMove.addEventListener("mouseout", fingerMouseOut);

const buttonMouseMove = document.getElementById("MouseMouseMove");

function fingerMouseMove() {
  alert("O pointer foi movimentado dentro do elemento!");
  console.log("O pointer foi movimentado dentro do elemento!");
}
buttonMouseMove.addEventListener("mousemove", fingerMouseMove);

const paragraphColor = document.getElementById("paragraph");
