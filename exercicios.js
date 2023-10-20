
var saida = document.getElementById("codigo");

function divisores(num) {
  num = +num;
  let divisor = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      divisor += i;
    }
  }
  saida.value = divisor.toString()
};

function distanciaEuclidiana(cordenadas) {
  lista_de_valores = cordenadas.split(" ")
  for (let i = 0; i < lista_de_valores.length; i++) {
    lista_de_valores[i] = +lista_de_valores[i]
  }
  x1 = lista_de_valores[0]
  x2 = lista_de_valores[1]
  y1 = lista_de_valores[2]
  y2 = lista_de_valores[3]
  let result = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))
  result = Math.sqrt(result)
  saida.value = result.toFixed(2).toString()
}

function contadorPalavras(frase) {
  let semVirgula = frase.replace(/,/g, "")
  let listaPalavras = semVirgula.split(' ')

  let contadorDePalavras = {};
  for (let i = 0; i < listaPalavras.length; i++) {
    let palavra = listaPalavras[i].toLowerCase();
    if (palavra.trim() !== "") {
      if (contadorDePalavras[palavra]) {
        contadorDePalavras[palavra]++;
      }
      else {
        contadorDePalavras[palavra] = 1;
      }
    }
  }
  saida.value = JSON.stringify(contadorDePalavras);
}


function identificadorDeMatriz(matriz) {
  let numLinhas = 1
  let numColunas = 0
  for (let i = 0; i < matriz.length; i++) {
    if (";" == matriz[i]) {
      numLinhas++
    }
    matrizCortada = matriz.split(';')
    numColunas = matrizCortada[0].length
  }
  saida.value = `Essa é uma matriz de dimensão ${numLinhas} X ${numColunas}`;
}

function fibonaci(quant) {
  let sequenciaFib = "0 , 1";
  quant = +quant;
  let x, z = 0
  let y = 1
  if (quant < 2) { saida.value = "0"; }
  else if (quant == 2) { saida.value = "0 , 1"; }
  else {
    for (let i = 2; i < quant; i++) {
      x = y + z
      z = y
      y = x
      sequenciaFib += " , ".concat(x.toString())
    }
    saida.value = sequenciaFib
  }
}

let opcaoSelecionada

document.getElementById("entrada").addEventListener("click", function () {
  var opcoes = document.getElementsByName("radio-btn");

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      opcaoSelecionada = opcoes[i].id;
      break;
    }
  }
})

function execute(opcaoSelecionada) {
  var campoTexto = document.getElementById("entrada");
  var valorInserido = campoTexto.value;
  if (opcaoSelecionada == "radio1") {
    divisores(valorInserido)
  }
  else if (opcaoSelecionada == "radio2") {
    distanciaEuclidiana(valorInserido)
  }
  else if (opcaoSelecionada == "radio3") {
    contadorPalavras(valorInserido)
  }
  else if (opcaoSelecionada == "radio4") {
    identificadorDeMatriz(valorInserido)
  }
  else if (opcaoSelecionada == "radio5") {
    fibonaci(valorInserido)
  }
}
