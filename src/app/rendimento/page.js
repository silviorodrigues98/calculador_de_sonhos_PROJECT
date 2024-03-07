"use client";

import React, { useState, useEffect } from "react";
const calcularValorInvestidoParaRendimento = require("../meta_rendimento");
const formatarComoReais = require("../misc");

export default function Rendimento() {
  const [rendimentoEsperado, setRendimentoEsperado] = useState(10);
  const [cdiAtual, setCdiAtual] = useState(10);
  const [porcentagemCdi, setPorcentagemCdi] = useState(100);
  const [prazoResgate, setPrazoResgate] = useState(1);
  const [resultado, setResultado] = useState(0);
  const [tempoDeRendimento, setTempoDeRendimento] = useState("diario");

  useEffect(() => {
    let result = calcularValorInvestidoParaRendimento(
      Number(rendimentoEsperado),
      Number(cdiAtual),
      Number(porcentagemCdi),
      Number(prazoResgate)
    );
    setResultado(result);
  }, [
    rendimentoEsperado,
    prazoResgate,
    cdiAtual,
    porcentagemCdi,
    tempoDeRendimento,
    resultado,
  ]);

  return (
    <div className="flex flex-col my-4 bg-blue-300 shadow-lg border-gray-500 border-2 rounded-lg p-4 px-8 py-6 mx-4">
      <label className="mb-2 text-center font-bold text-xl">
        Qual o rendimento esperado, em reais?{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(rendimentoEsperado)}
      </label>
      <input
        type="number"
        value={rendimentoEsperado}
        onChange={(e) => setRendimentoEsperado(e.target.value)}
        className="rounded-lg p-2 text-lg text-center" // Added text-center class
      />
      <select
        value={tempoDeRendimento}
        className="rounded-lg p-2 text-lg text-center mx-auto my-2"
        onChange={(e) => setTempoDeRendimento(e.target.value)}
      >
        <option value="diario">Diário</option>
        <option value="mensal">Mensal</option>
        <option value="anual">Anual</option>
      </select>
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
          Juntando{"  "}
          <span className="font-bold text-white">
            {resultado[tempoDeRendimento]}
          </span>{" "}
          você terá o rendimento de {formatarComoReais(rendimentoEsperado)}{" "}
          {tempoDeRendimento}, já descontado o imposto de{" "}
          <span className="font-bold text-white">{resultado.aliquota}</span>
        </p>
      </div>
    </div>
  );
}
