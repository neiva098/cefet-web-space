// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function imprimeG() {
  function setValue(value) {
    document.getElementById("resultado").value = value;
  }

  function getInputsValues() {
    const elementConstant = document.getElementById("constante");
    const elementM1 = document.getElementById("massa1");
    const elementM2 = document.getElementById("massa2");
    const elementDistance = document.getElementById("distancia");

    return {
      G: elementConstant.value,
      M1: elementM1.value,
      M2: elementM2.value,
      D: elementDistance.value,
    };
  }

  function calculaG(G, m1, m2, d) {
    const dValue = Number(d);
    return dValue !== NaN && dValue !== 0 ? (G * m1 * m2) / Math.pow(d, 2) : 0;
  }

  const vars = getInputsValues();

  const value = calculaG(vars.G, vars.M1 || 0, vars.M2 || 0, vars.D);

  setValue(value);

  return value;
}
