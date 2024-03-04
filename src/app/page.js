"use client";

import React, { useState } from "react";

export default function Page() {
  const [escolha, setEscolha] = useState("nenhuma");

  return (
    <div>
      <div>ESCOLHA UM:</div>
      <div onClick={() => setEscolha("montante")}>
        QUERO CHEGAR UM MONTANTE ESPECÍFICO, POR EXEMPLO R$ 100.000,00
      </div>
      <div onClick={() => setEscolha("rendimento")}>
        DESEJO TER UM RENDIMENTO MENSAL COMO RENDA PASSIVA, GANHANDO R$ 1.000,00
        MENSALMENTE, POR EXEMPLO
      </div>
      <div onClick={() => setEscolha("retorno")}>
        JÁ TENHO CAPITAL INVESTIDO, E DESEJO QUANTO ELE RENDE POR DIA, MÊS E ANO
      </div>
      <div>ESCOLHA {escolha}</div>
    </div>
  );
}
