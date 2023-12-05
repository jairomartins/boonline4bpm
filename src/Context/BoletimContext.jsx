import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Criação do contexto para o Boletim
const BoletimContext = createContext();

function BoletimProvider({ children }) {
  // Estado do boletim, inicializado com os dados armazenados ou valores padrão
  const [boletim, setBoletim] = useState(() => {
    // Verifica se há um boletim armazenado no localStorage
    const storedBoletim = localStorage.getItem("boletim");
    
    // Se existir, utiliza o boletim armazenado, caso contrário, cria um novo boletim
    return storedBoletim
      ? JSON.parse(storedBoletim) // Converte a string do localStorage para objeto JavaScript
      : {
          municipio: "Balsas",
          natureza: "",
          id: uuidv4(),
          envolvidos: [],
          materiaisApreendidos: [],
          efetivo: [],
          images: [],
        };
  });

  // Efeito que atualiza o localStorage sempre que o boletim for modificado
  useEffect(() => {
    localStorage.setItem("boletim", JSON.stringify(boletim));
  }, [boletim]); // Executa o efeito quando o estado 'boletim' for modificado

  // Retorna o provedor de contexto com o estado do boletim e a função para modificá-lo
  return (
    <BoletimContext.Provider value={{ boletim, setBoletim }}>
      {children} {/* Renderiza os componentes filhos envolvidos neste contexto */}
    </BoletimContext.Provider>
  );
}

export { BoletimContext, BoletimProvider }; // Exporta o contexto e o provedor
