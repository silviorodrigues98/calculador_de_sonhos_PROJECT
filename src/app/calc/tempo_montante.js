const formatarComoReais = require("./misc");

function calcularTempoParaMeta(
  meta,
  valorInicial,
  aporteMensal,
  taxaCDI,
  percentualCDI
) {
  // Calcula a taxa diária do CDI
  const taxaDiariaCDI = taxaCDI / 100 / 252;

  // Calcula a rentabilidade diária do CDB
  const rentabilidadeDiariaCDB = taxaDiariaCDI * (percentualCDI / 100);

  // Inicializa o saldo com o valor inicial
  let saldo = valorInicial;
  let totalDias = 0;
  let diasParaAporte = 30; // Contador para o próximo aporte mensal

  // Loop até que o saldo atinja a meta
  while (saldo < meta) {
    // Adiciona o rendimento diário ao saldo
    saldo += saldo * rentabilidadeDiariaCDB;

    // Conta mais um dia
    totalDias++;
    diasParaAporte--;

    // Verifica se é dia de fazer aporte mensal
    if (diasParaAporte === 0) {
      saldo += aporteMensal;
      diasParaAporte = 30; // Reinicia o contador para o próximo aporte
    }
  }

  // Calcula o número de meses e dias para atingir a meta
  const meses = Math.floor(totalDias / 30);
  const dias = totalDias % 30;

  return { meses, dias };
}

// Exemplo de uso da função
const meta = 88371; // Meta em reais
const valorInicial = 15000; // Valor inicial em reais
const aporteMensal = 1000; // Aporte mensal em reais
const taxaCDI = 11.15; // Taxa anual do CDI em porcentagem
const percentualCDI = 110; // Percentual do CDI acordado para o CDB

const tempoParaMeta = calcularTempoParaMeta(
  meta,
  valorInicial,
  aporteMensal,
  taxaCDI,
  percentualCDI
);
console.log(
  `Você levará aproximadamente ${tempoParaMeta.meses} meses e ${
    tempoParaMeta.dias
  } dias para atingir a meta de R$ ${formatarComoReais(meta)}`
);
