import React from "react";
import NavPage from "../NavPage";
import AddOcorrencia from "./AddOcorrencia";


const Header = ({boletim,setBoletim})=>{
    
    return(
        <>
            <AddOcorrencia boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/" next="/envolvido"/>
        </>
    )
}

export default Header