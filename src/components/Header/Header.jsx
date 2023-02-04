import React from "react";

import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";
import FormCabecalho from "./FormCabecalho";
import NavPage from "../NavPage";


const Header = ()=>{
    
    return(
        <>
            <CabecalhoBoletim texto={"Fato Comunicado"}/>
            <FormCabecalho />
            <NavPage prev="/dashboard" next="/envolvido"/>
        </>
    )
}
export default Header