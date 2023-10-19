function divisores(num) {
  let divisor = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      divisor = i;
      divisor++
    }
  }
  console.log(divisor)
};
divisores(9);

function distanciaEuclidiana(x1, x2, y1, y2) {
  let result = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))
  result = Math.sqrt(result)
  console.log(result.toFixed(2));
}
distanciaEuclidiana(10, 20, 5, 10)

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
  console.log(contadorDePalavras);
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
  console.log(`Essa é uma matriz de dimensão ${numLinhas} X ${numColunas}`);
}
identificadorDeMatriz("1468;3567;1324");

function fibonaci(quant) {
  let x, z = 0
  let y = 1
  if (quant < 2) {
    console.log(0);
  }
  else if (quant == 2) {
    console.log("0 \n1");
  }
  else {
    console.log(" 0 \n1");
    for (let i = 0; i < quant; i++) {
      x = y + z
      z = y
      y = x
      console.log(x)
    }
  }
}
fibonaci(2)
