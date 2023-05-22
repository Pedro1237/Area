function calcularAreaTrapezio(baseMenor, baseMaior, altura) {
    var area = (baseMenor + baseMaior) / 2 * altura;
    return area;
  }

  function calcularAreaParalelogramo(base, altura) {
    var area = base * altura;
    return area;
  }

  function calcularAreaLosango(diagonalMaior, diagonalMenor) {
    var area = (diagonalMaior * diagonalMenor) / 2;
    return area;
  }

  function calcularAreas() {
    var baseMenor = parseFloat(document.getElementById("baseMenor").value);
    var baseMaior = parseFloat(document.getElementById("baseMaior").value);
    var alturaTrapezio = parseFloat(document.getElementById("alturaTrapezio").value);
    var baseParalelogramo = parseFloat(document.getElementById("baseParalelogramo").value);
    var alturaParalelogramo = parseFloat(document.getElementById("alturaParalelogramo").value);
    var diagonalMaiorLosango = parseFloat(document.getElementById("diagonalMaiorLosango").value);
    var diagonalMenorLosango = parseFloat(document.getElementById("diagonalMenorLosango").value);

    var areaDoTrapezio = calcularAreaTrapezio(baseMenor, baseMaior, alturaTrapezio);
    var areaDoParalelogramo = calcularAreaParalelogramo(baseParalelogramo, alturaParalelogramo);
    var areaDoLosango = calcularAreaLosango(diagonalMaiorLosango, diagonalMenorLosango);

    document.getElementById("resultadoTrapezio").innerHTML = "A área do trapézio é: " + areaDoTrapezio;
    document.getElementById("resultadoParalelogramo").innerHTML = "A área do paralelogramo é: " + areaDoParalelogramo;
    document.getElementById("resultadoLosango").innerHTML = "A área do losango é: " + areaDoLosango;
  }
  