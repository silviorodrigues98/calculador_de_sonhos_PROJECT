import Link from "next/link";

export default function Page() {

  return (
    <div>
      <div>
        <Link legacyBehavior href="/montante">
          <a>QUERO CHEGAR UM MONTANTE ESPECÍFICO, POR EXEMPLO R$ 100.000,00</a>
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="/rendimento">
          <a>DESEJO TER UM RENDIMENTO MENSAL COMO RENDA PASSIVA, GANHANDO R$ 1.000,00 MENSALMENTE, POR EXEMPLO</a>
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="/retorno">
          <a>JÁ TENHO CAPITAL INVESTIDO, E DESEJO QUANTO ELE RENDE POR DIA, MÊS E ANO</a>
        </Link>
      </div>
    </div>
  )
}
