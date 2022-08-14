import React from "react";

import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";
import NavPage from "../NavPage";
import AddHeader from "./AddHeader";


const Header = ({boletim,setBoletim})=>{
    
    return(
        <>
            <CabecalhoBoletim texto={"Fato Comunicado"}/>
            <AddHeader boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/dashboard" next="/envolvido"/>
        </>
    )
}

export default Header