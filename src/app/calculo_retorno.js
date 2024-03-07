const formatarComoReais = require("./misc");

function calcularRendimentos(
  valorInvestido,
  taxaCDI,
  percentualCDB,
  prazoResgate
) {
  // Calcula a taxa diária do CDI
  const taxaDiariaCDI = taxaCDI / 100 / 252;

  // Calcula a rentabilidade diária do CDB
  const rentabilidadeDiariaCDB = taxaDiariaCDI * (percentualCDB / 100);

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

  // Calcula o rendimento diário, mensal e anual
  const rendimentoDiario =
    valorInvestido * rentabilidadeDiariaCDB * (1 - aliquotaIR);
  const rendimentoMensal = rendimentoDiario * 30; // Considerando um mês de 30 dias
  const rendimentoAnual = rendimentoDiario * 252; // Considerando 252 dias úteis por ano

  return {
    diario: rendimentoDiario,
    mensal: rendimentoMensal,
    anual: rendimentoAnual,
    aliquota: `${aliquotaIR * 100}%`,
  };
}

// // Exemplo de uso da função
// const valorInvestido = 250000; // Valor já investido em reais
// const taxaCDI = 11.15; // Taxa anual do CDI em porcentagem
// const percentualCDB = 110; // Percentual do CDB
// const prazoResgate = 365; // Prazo de resgate em dias

module.exports = calcularRendimentos;
