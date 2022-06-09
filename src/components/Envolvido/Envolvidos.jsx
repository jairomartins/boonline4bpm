import React from "react";

import NavPage from "../NavPage";

import AddEnvolvido from "./AddEnvolvido";

function Envolvidos ({test}){

    return (
        <>
            <AddEnvolvido/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos