// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularTotal(faturamento) {
  return Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
}

function calcularPercentual(faturamento, total) {
  const percentuais = {};
  for (let estado in faturamento) {
    percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
  }
  return percentuais;
}

const totalFaturamento = calcularTotal(faturamentoMensal);

const percentualPorEstado = calcularPercentual(
  faturamentoMensal,
  totalFaturamento
);

console.log(`Percentual de cada estado: `);
for (let estado in percentualPorEstado) {
  console.log(`${estado}: ${percentualPorEstado[estado]}%`);
}

// Saída:

// Percentual de cada estado:
// SP: 37.53%
// RJ: 20.29%
// MG: 16.17%
// ES: 15.03%
// Outros: 10.98%
