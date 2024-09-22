// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const dados = require("./dados.json");

function filtrarFaturamentoValido(dados) {
  return dados.map((item) => item.valor).filter((valor) => valor > 0);
}

function menorValorFaturamento() {
  const valoresFaturamento = filtrarFaturamentoValido(dados);
  return Math.min(...valoresFaturamento);
}

function maiorValorFaturamento() {
  const valoresFaturamento = filtrarFaturamentoValido(dados);
  return Math.max(...valoresFaturamento);
}

function calcularMediaFaturamento() {
  const valoresFaturamento = filtrarFaturamentoValido(dados);
  const somaFaturamento = valoresFaturamento.reduce(
    (acc, valor) => acc + valor,
    0
  );
  return somaFaturamento / valoresFaturamento.length;
}

function diasAcimaDaMediaFaturamento() {
  const valoresFaturamento = filtrarFaturamentoValido(dados);
  const mediaFaturamento = calcularMediaFaturamento(dados);

  const diasAcimaDaMedia = valoresFaturamento.filter(
    (valor) => valor > mediaFaturamento
  ).length;

  return diasAcimaDaMedia;
}

console.log(
  `O menor valor de faturamento ocorrido em um dia do mês foi de ${menorValorFaturamento().toFixed(
    2
  )}`
); // Saída: O menor valor de faturamento ocorrido em um dia do mês foi de 373.78
console.log(
  `O maior valor de faturamento ocorrido em um dia do mês foi de ${maiorValorFaturamento().toFixed(
    2
  )}`
); // Saída: O maior valor de faturamento ocorrido em um dia do mês foi de 48924.24
console.log(
  `O número de dias no mês em que o valor de faturamento diário foi superior à média mensal (${calcularMediaFaturamento().toFixed(
    2
  )}) foi de ${diasAcimaDaMediaFaturamento()} dias.`
); // Saída: O número de dias no mês em que o valor de faturamento diário foi superior à média mensal (20865.37) foi de 10 dias.
