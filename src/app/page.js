import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center">
      <Link legacyBehavior href="/montante">
        <div className="bg-blue-500 rounded-lg p-4 m-2 cursor-pointer">
          <a className="text-lg">
            QUERO CHEGAR UM MONTANTE ESPECÍFICO, POR EXEMPLO R$ 100.000,00
          </a>
        </div>
      </Link>
      <Link legacyBehavior href="/rendimento">
        <div className="bg-green-500 rounded-lg p-4 m-2  cursor-pointer">
          <a className="text-lg">
            DESEJO TER UM RENDIMENTO MENSAL COMO RENDA PASSIVA, GANHANDO R$
            1.000,00 MENSALMENTE, POR EXEMPLO
          </a>
        </div>
      </Link>
      <Link legacyBehavior href="/retorno">
        <div className="bg-yellow-500 rounded-lg p-4 m-2 cursor-pointer">
          <a className="text-lg">
            JÁ TENHO CAPITAL INVESTIDO, E DESEJO SABER QUANTO ELE RENDE POR DIA,
            MÊS E ANO
          </a>
        </div>
      </Link>
    </div>
  );
}
