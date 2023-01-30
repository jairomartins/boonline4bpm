import React from "react";

import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";
import NavPage from "../NavPage";
import FormCabecalho from "./FormCabecalho";


const Header = ({boletim,setBoletim})=>{
    
    return(
        <>
            <CabecalhoBoletim texto={"Fato Comunicado"}/>
            <FormCabecalho boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/dashboard" next="/envolvido"/>
        </>
    )
}

export default Header