import React from "react";

import NavPage from "../NavPage";

import AddEnvolvido from "./AddEnvolvido";
import EnvolvidoList from "./EnvolvidoList";

function Envolvidos ({boletim,setBoletim}){

    return (
        <>
            <AddEnvolvido boletim={boletim} setBoletim={setBoletim} />
            <EnvolvidoList envolvidos={boletim.envolvidos} boletim={boletim} setBoletim={setBoletim}/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos