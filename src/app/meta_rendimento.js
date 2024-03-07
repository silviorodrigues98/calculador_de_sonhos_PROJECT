const formatarComoReais = require("./misc");

function calcularValorInvestidoParaRendimento(
  rendimentoEsperado,
  taxaCDI,
  percentualCDI,
  prazoResgate
) {
  // Calcula a taxa diária do CDI
  const taxaDiariaCDI = taxaCDI / 100 / 252;

  // Calcula a rentabilidade diária do CDB
  const rentabilidadeDiariaCDB = taxaDiariaCDI * (percentualCDI / 100);

  // Define a alíquota do IR conforme o prazo de resgate
  let aliquotaIR;
  if (prazoResgate <= 180) {
    aliquotaIR = 0.225; // 22.5%
  } else if (prazoResgate > 180 && prazoResgate <= 360) {
    aliquotaIR = 0.2; // 20%
  } else if (prazoResgate > 360 && prazoResgate <= 720) {
    aliquotaIR = 0.175; // 17.5%
  } else {
    aliquotaIR = 0.15; // 15%
  }

  // Calcula o valor que precisa ser investido para alcançar o rendimento esperado antes do IR
  const valorInvestidoDiario =
    rendimentoEsperado / (rentabilidadeDiariaCDB * (1 - aliquotaIR));
  const valorInvestidoMensal =
    rendimentoEsperado / (rentabilidadeDiariaCDB * 30 * (1 - aliquotaIR)); // Considerando um mês de 30 dias
  const valorInvestidoAnual =
    rendimentoEsperado / (rentabilidadeDiariaCDB * 252 * (1 - aliquotaIR)); // Considerando 252 dias úteis por ano

  return {
    diario: formatarComoReais(Math.round(valorInvestidoDiario)),
    mensal: formatarComoReais(Math.round(valorInvestidoMensal)),
    anual: formatarComoReais(Math.round(valorInvestidoAnual)),
    aliquota: `${aliquotaIR * 100}%`,
  };
}

// Exemplo de uso da função
// const rendimentoEsperado = 1000; // Rendimento esperado em reais
// const taxaCDI = 11.15; // Taxa anual do CDI em porcentagem
// const percentualCDI = 110; // Percentual do CDI acordado para o CDB
// const prazoResgate = 1; // Prazo de resgate em dias

module.exports = calcularValorInvestidoParaRendimento;
