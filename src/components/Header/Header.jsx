import React, { useContext } from "react";

import { BoletimContext } from "../../Context/BoletimContext";


import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";
import FormCabecalho from "./FormCabecalho";
import NavPage from "../NavPage";


const Header = ()=>{
    const {boletim, setBoletim} = useContext(BoletimContext)


    return(
        <>
            <CabecalhoBoletim texto={"Fato Comunicado"}/>
            <FormCabecalho boletim={boletim} setBoletim={setBoletim} />
            <NavPage prev="/dashboard" next="../envolvido"/>

        </>
    )

    
}
export default Header