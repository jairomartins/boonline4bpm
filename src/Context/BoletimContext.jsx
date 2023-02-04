import React from "react";

import { v4 as uuidv4 } from "uuid";

import { createContext, useState } from "react";

const BoletimContext = createContext()

// Fornecedor de contexto 
function BoletimProvider({ children }) {
    

    //Boletim modelo que será utilizado na aplicação
    const [boletim, setBoletim] = useState({
        municipio:"Balsas",
        natureza:"",
        id:uuidv4(),
        envolvidos:[],
        materiaisApreendidos:[],
        efetivo:[],
    })


    return (
      <BoletimContext.Provider value={{boletim, setBoletim}}>
        {children}
      </BoletimContext.Provider>
    );
  }




export {BoletimContext, BoletimProvider}