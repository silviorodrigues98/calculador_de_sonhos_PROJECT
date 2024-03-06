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
    <div className="flex flex-col my-4 bg-blue-300 shadow-lg border-gray-500 border-2 rounded-lg p-4 px-8 py-6 mx-4">
      <label className="mb-2 text-center font-bold text-xl">
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
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />

      <label className="mb-2 text-center font-bold text-xl">
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
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <label className="mb-2 text-center font-bold text-xl">
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
          Você vai levar{" "}
          <span className="font-bold text-white">{resultado.anos} ANOS</span> ,{" "}
          <span className="font-bold text-white">{resultado.meses} MESES</span>{" "}
          e <span className="font-bold text-white">{resultado.dias} DIAS</span>
        </p>
        <p>para alcançar sua meta financeira!</p>
      </div>
    </div>
  );
}
