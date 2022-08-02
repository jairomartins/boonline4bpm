
import React from "react";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import NavUser from "../../components/nav/NavUser";


const DashboardUsuario = () => {
            

    return ( 

    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(beta)"}/>
        <NavUser/>
    </> 
    
    );
}
 
export default DashboardUsuario;