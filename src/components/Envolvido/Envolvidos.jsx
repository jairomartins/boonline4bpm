import React from "react";


import NavPage from "../NavPage";

import AddEnvolvido from "./AddEnvolvido";
import EnvolvidoList from "./EnvolvidoList";
import Cabecalho from "../Cabecalho/Cabecalho";

function Envolvidos ({boletim,setBoletim}){

    return (
        <>
            <Cabecalho texto={"Adicionar Envolvidos "}/>
            <AddEnvolvido boletim={boletim} setBoletim={setBoletim} />
            <EnvolvidoList boletim={boletim} setBoletim={setBoletim}/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos