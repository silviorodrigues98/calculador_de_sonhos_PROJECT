"use client";

import React, { useState, useEffect } from "react";
const calcularRendimentos = require("../calculo_retorno");
const formatarComoReais = require("../misc");

export default function Rendimento() {
  const [valorInvestido, setValorInvestido] = useState(10000); // Valor já investido em reais
  const [cdiAtual, setCdiAtual] = useState(10);
  const [porcentagemCdi, setPorcentagemCdi] = useState(100);
  const [prazoResgate, setPrazoResgate] = useState(1);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const result = calcularRendimentos(
      Number(valorInvestido),
      Number(cdiAtual),
      Number(porcentagemCdi),
      Number(prazoResgate)
    );
    setResultado(result);
  }, [prazoResgate, cdiAtual, porcentagemCdi, resultado, valorInvestido]);

  return (
    <div className="flex flex-col my-4 bg-blue-300 shadow-lg border-gray-500 border-2 rounded-lg p-4 px-8 py-6 mx-4">
      <label className="mb-2 text-center font-bold text-xl">
        Qual o montande você já tem investido?{" "}
        {formatarComoReais(valorInvestido)}{" "}
      </label>
      <input
        type="number"
        value={valorInvestido}
        onChange={(e) => setValorInvestido(e.target.value)}
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <label className="mb-2 text-center font-bold text-xl">
        Qual o prazo você pretende resgatar o dinheiro, em dias? {prazoResgate}{" "}
        dias
      </label>
      <input
        type="number"
        value={prazoResgate}
        onChange={(e) => setPrazoResgate(e.target.value)}
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <label className="mb-2 text-center font-bold text-xl">
        Taxa CDI atual (deixe padrão se nao souber){" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(cdiAtual / 100)}
      </label>
      <input
        type="number"
        value={cdiAtual}
        onChange={(e) => setCdiAtual(e.target.value)}
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <label className="mb-2 text-center font-bold text-xl">
        Porcentagem sobre o CDI (deixe padrão se nao souber){" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(porcentagemCdi / 100)}
      </label>
      <input
        type="number"
        value={porcentagemCdi}
        onChange={(e) => setPorcentagemCdi(e.target.value)}
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <div className="bg-blue-500 text-xl p-4 mt-14 text-center italic rounded-2xl border-white border-double border-4">
        <p>
          Com seus
          {"  "}
          <span className="font-bold text-white">
            {formatarComoReais(valorInvestido)}
          </span>{" "}
          investidos, você terá o rendimento mensal de{" "}
          <span className="font-bold text-white">
            {formatarComoReais(resultado.mensal)}
          </span>
          , já descontado o imposto de
          <span className="font-bold text-white"> {resultado.aliquota} </span>
        </p>
      </div>
    </div>
  );
}
