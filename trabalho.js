function calcularAreaLosango() {
  var diagonalMaior = parseFloat(document.getElementById("diagonalMaior").value);
  var diagonalMenor = parseFloat(document.getElementById("diagonalMenor").value);

  var area = (diagonalMaior * diagonalMenor) / 2;
  
  console.log("Valores do losango:");
  console.log("Diagonal Maior:", diagonalMaior);
  console.log("Diagonal Menor:", diagonalMenor);
  console.log("A área do losango é:", area);
  
  document.getElementById("resultadoLosango").textContent = "A área do losango é: " + area;
}

function calcularAreaParalelogramo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var area = base * altura;
  
  console.log("Valores do paralelogramo:");
  console.log("Base:", base);
  console.log("Altura:", altura);
  console.log("A área do paralelogramo é:", area);
  
  document.getElementById("resultadoParalelogramo").textContent = "A área do paralelogramo é: " + area;
}

function calcularAreaTrapezio() {
  var baseMenor = parseFloat(document.getElementById("baseMenor").value);
  var baseMaior = parseFloat(document.getElementById("baseMaior").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var area = (baseMenor + baseMaior) / 2 * altura;
  
  console.log("Valores do trapézio:");
  console.log("Base Menor:", baseMenor);
  console.log("Base Maior:", baseMaior);
  console.log("Altura:", altura);
  console.log("A área do trapézio é:", area);
  
  document.getElementById("resultadoTrapezio").textContent = "A área do trapézio é: " + area;
}
