import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import NavPage from "../NavPage";
import AddHeader from "./AddHeader";


const Header = ({boletim,setBoletim})=>{
    
    return(
        <>
            <Cabecalho texto={"Fato Comunicado"}/>
            <AddHeader boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/" next="/envolvido"/>
        </>
    )
}

export default Header