const formatarComoReais = require("./misc");

function calcularValorInvestidoParaRendimento(
  rendimentoEsperado,
  taxaCDI,
  percentualCDI,
  periodo,
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
  let valorInvestidoBruto;
  if (periodo === "diario") {
    valorInvestidoBruto =
      rendimentoEsperado / (rentabilidadeDiariaCDB * (1 - aliquotaIR));
  } else if (periodo === "mensal") {
    valorInvestidoBruto =
      rendimentoEsperado / (rentabilidadeDiariaCDB * 30 * (1 - aliquotaIR)); // Considerando um mês de 30 dias
  } else if (periodo === "anual") {
    valorInvestidoBruto =
      rendimentoEsperado / (rentabilidadeDiariaCDB * 252 * (1 - aliquotaIR)); // Considerando 252 dias úteis por ano
  }

  return valorInvestidoBruto;
}

// Exemplo de uso da função
const rendimentoEsperado = 1000; // Rendimento esperado em reais
const taxaCDI = 11.15; // Taxa anual do CDI em porcentagem
const percentualCDI = 110; // Percentual do CDI acordado para o CDB
const prazoResgate = 1; // Prazo de resgate em dias

const valorNecessarioInvestirDiario = calcularValorInvestidoParaRendimento(
  rendimentoEsperado,
  taxaCDI,
  percentualCDI,
  "diario",
  prazoResgate
);
console.log(
  `Para um rendimento diário de R$ ${formatarComoReais(
    rendimentoEsperado
  )}, é necessário investir ${formatarComoReais(valorNecessarioInvestirDiario)}`
);

const valorNecessarioInvestirMensal = calcularValorInvestidoParaRendimento(
  rendimentoEsperado,
  taxaCDI,
  percentualCDI,
  "mensal",
  prazoResgate
);
console.log(
  `Para um rendimento mensal de R$ ${formatarComoReais(
    rendimentoEsperado
  )}, é necessário investir ${formatarComoReais(valorNecessarioInvestirMensal)}`
);

const valorNecessarioInvestirAnual = calcularValorInvestidoParaRendimento(
  rendimentoEsperado,
  taxaCDI,
  percentualCDI,
  "anual",
  prazoResgate
);
console.log(
  `Para um rendimento anual de R$ ${formatarComoReais(
    rendimentoEsperado
  )}, é necessário investir ${formatarComoReais(valorNecessarioInvestirAnual)}`
);
