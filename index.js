import readlineSync from "readline-sync";
import { celsiusParaFahrenheit, quilometroParaMilha } from "./conversores.js";

let opcao;
let valor;
while (true) {
  console.log("Calculadora de conversões: Escolha um opção:\n");
  console.log("1 - Celsius para Fahrnheit");
  console.log("2 - Quilômetros para Milhas");
  console.log("3 - Sair\n");
  opcao = readlineSync.question();
  console.log();
  if (opcao == "3") {
    break;
  } else if (opcao == "1" || opcao == "2") {
    valor = readlineSync.question("Informe o valor que deseja converter: ");
    console.log();
    valor = Number(valor);
    if (isNaN(valor)) {
      console.log("VALOR INVÁLIDO!!!\n");
      continue;
    }
  }
  switch (opcao) {
    case "1":
      let fahrnheit = celsiusParaFahrenheit(valor);
      console.log(
        `${valor.toFixed(2)}ºC equivale a ${fahrnheit.toFixed(2)}ºF\n`
      );
      break;
    case "2":
      let milhas = quilometroParaMilha(valor);
      console.log(`${valor.toFixed(2)}km equivale a ${milhas.toFixed(2)}mi\n`);
      break;
    default:
      console.log("OPÇÃO INVÁLIDA!!!\n");
      break;
  }
}
