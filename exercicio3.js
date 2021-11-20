// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function setExpandAction() {
  const elements = document.querySelectorAll(".botao-expandir-retrair");

  elements.forEach((e) => {
    e.addEventListener("click", handleExpand);
  });

  return elements.length;
}

function handleExpand(e) {
  const pElement = e.currentTarget.parentElement;

  if (pElement.className === "expandido") {
    e.currentTarget.innerHTML = "+";
    return (pElement.className = undefined);
  }

  e.currentTarget.innerHTML = "-";
  pElement.className = "expandido";
}
