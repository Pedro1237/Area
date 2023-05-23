  $(document).ready(function() {
  function calcularAreaLosango() {
    var diagonalMaior = parseFloat($("#diagonalMaior").val());
    var diagonalMenor = parseFloat($("#diagonalMenor").val());

    var area = (diagonalMaior * diagonalMenor) / 2;

    console.log("A área do losango é:", area);

    $("#resultadoLosango").text("A área do losango é: " + area);
  }

  function calcularAreaParalelogramo() {
    var base = parseFloat($("#base").val());
    var altura = parseFloat($("#altura").val());

    var area = base * altura;

    console.log("A área do paralelogramo é:", area);

    $("#resultadoParalelogramo").text("A área do paralelogramo é: " + area);
  }

  function calcularAreaTrapezio() {
    var baseMenor = parseFloat($("#baseMenor").val());
    var baseMaior = parseFloat($("#baseMaior").val());
    var altura = parseFloat($("#altura").val());

    var area = (baseMenor + baseMaior) / 2 * altura;

    console.log("A área do trapézio é:", area);

    $("#resultadoTrapezio").text("A área do trapézio é: " + area);
  }

  $("#calcularLosango").click(function() {
    calcularAreaLosango();
  });

  $("#calcularParalelogramo").click(function() {
    calcularAreaParalelogramo();
  });

  $("#calcularTrapezio").click(function() {
    calcularAreaTrapezio();
  });
});
   
