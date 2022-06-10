import React from "react";
import NavPage from "../NavPage";
import AddHeader from "./AddHeader";


const Header = ({boletim,setBoletim})=>{
    
    return(
        <>
            <AddHeader boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/" next="/envolvido"/>
        </>
    )
}

export default Header