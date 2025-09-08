import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Criação do contexto para o Boletim
const BoletimContext = createContext();

function BoletimProvider({ children }) {
  const [boletim, setBoletim] = useState(() => {
    const storedBoletim = localStorage.getItem("boletim");
    return storedBoletim
      ? JSON.parse(storedBoletim)
      : {
          municipio: "Balsas",
          natureza: "",
          numero: "",
          data: "",
          id: uuidv4(),
          _id: null,  // novo campo para MongoDB
          envolvidos: [],
          materiaisApreendidos: [],
          efetivo: [],
          images: [],
        };
  });

  // Sincroniza localStorage
  useEffect(() => {
    localStorage.setItem("boletim", JSON.stringify(boletim));
  }, [boletim]);

  // Função para criar ou atualizar boletim na API
  const salvarBoletim = async () => {
    try {
      const response = await axios.post("/api/boletim", { boletim });
      const boletimRetornado = response.data.boletim;

      // Atualiza o estado com o _id retornado do MongoDB
      setBoletim((prev) => ({
        ...prev,
        ...boletimRetornado,
      }));

      return boletimRetornado;
    } catch (err) {
      console.error("Erro ao salvar boletim:", err);
      throw err;
    }
  };

  // Função para resetar boletim
  const resetBoletim = () => {
    setBoletim({
      municipio: "Balsas",
      natureza: "",
      numero: "",
      data: "",
      id: uuidv4(),
      _id: null,
      envolvidos: [],
      materiaisApreendidos: [],
      efetivo: [],
      images: [],
    });
  };

  return (
    <BoletimContext.Provider
      value={{ boletim, setBoletim, salvarBoletim, resetBoletim }}
    >
      {children}
    </BoletimContext.Provider>
  );
}

export { BoletimContext, BoletimProvider };
