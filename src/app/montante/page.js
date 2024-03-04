"use client";

import React, { useState, useEffect } from "react";
const calcularTempoParaMeta = require("../tempo_montante");

export default function Page() {
  const [meta, setMeta] = useState(10000);
  const [valorInicial, setValorInicial] = useState(1000);
  const [aporteMensal, setAporteMensal] = useState(100);
  const [cdiAtual, setCdiAtual] = useState(10);
  const [porcentagemCdi, setPorcentagemCdi] = useState(100);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const result = calcularTempoParaMeta(
      Number(meta),
      Number(valorInicial),
      Number(aporteMensal),
      Number(cdiAtual),
      Number(porcentagemCdi)
    );

    setResultado(result);
  }, [meta, valorInicial, aporteMensal, cdiAtual, porcentagemCdi]);

  return (
    <div className="flex flex-col my-4 bg-green-200 shadow-lg border-gray-500 border-2 rounded-lg p-4">
      <label className="mb-2 text-center font-bold text-lg">
        Quanto você deseja ter?{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(meta)}
      </label>
      <input
        type="number"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />

      <label className="mb-2 text-center font-bold text-lg">
        Quanto você já tem?{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valorInicial)}
      </label>
      <input
        type="number"
        value={valorInicial}
        onChange={(e) => setValorInicial(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />
      <label className="mb-2 text-center font-bold text-lg">
        Quanto você irá investir por mês?{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(aporteMensal)}
      </label>
      <input
        type="number"
        value={aporteMensal}
        onChange={(e) => setAporteMensal(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />
      <label className="mb-2 text-center font-bold text-lg">
        Taxa CDI atual {" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(cdiAtual / 100)}
      </label>
      <input
        type="number"
        value={cdiAtual}
        onChange={(e) => setCdiAtual(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />
      <label className="mb-2 text-center font-bold text-lg">
        Qual a porcentagem sobre o CDI seu investimento oferece? (deixe padrão se nao souber){" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(porcentagemCdi / 100)}
      </label>
      <input
        type="number"
        value={porcentagemCdi}
        onChange={(e) => setPorcentagemCdi(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />
      <div>
        <p className="text-center">ANOS {resultado.anos} MESES: {resultado.meses} DIAS: {resultado.dias}</p>
      </div>
    </div>
  );
}
