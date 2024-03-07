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

  let anos = 0;
  let meses = 0;
  let dias = totalDias;

  while (dias >= 365) {
    dias -= 365;
    anos++;
  }

  while (dias >= 30) {
    dias -= 30;
    meses++;
  }

  return { anos, meses, dias };
}

module.exports = calcularTempoParaMeta;
