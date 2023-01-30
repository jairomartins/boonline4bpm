import React from "react";

import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";
import NavPage from "../NavPage";
import FormCabecalho from "./FormCabecalho";


const Header = ({boletim,setBoletim, cidadeLogin})=>{
    
    return(
        <>
            <CabecalhoBoletim texto={"Fato Comunicado"}/>
            <FormCabecalho boletim={boletim} setBoletim={setBoletim} cidadeLogin={cidadeLogin} />
            <NavPage prev="/dashboard" next="/envolvido"/>
        </>
    )
}

export default Header