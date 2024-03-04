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

  // Calcula o número de anos, meses e dias para atingir a meta
  let anos = Math.floor(totalDias / 365);
  let meses = Math.floor((totalDias % 365) / 30);
  const dias = totalDias % 30;

  if (meses >= 12) {
    anos += Math.floor(meses / 12);
    meses = meses % 12;
  }

  return { anos, meses, dias };
}

module.exports = calcularTempoParaMeta;
