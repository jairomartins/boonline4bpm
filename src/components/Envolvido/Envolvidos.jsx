import React from "react";



import NavPage from "../NavPage";

import AddEnvolvido from "./AddEnvolvido";
import EnvolvidoList from "./EnvolvidoList";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function Envolvidos ({boletim,setBoletim}){

    return (
        <>
            <CabecalhoBoletim texto={"Adicionar Envolvidos "}/>
            <AddEnvolvido boletim={boletim} setBoletim={setBoletim} />
            <EnvolvidoList boletim={boletim} setBoletim={setBoletim}/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos