import React from "react";

import NavPage from "../NavPage";

import AddEnvolvido from "./AddEnvolvido";
import ListaEnvolvidos from "./ListaEnvolvidos";

function Envolvidos ({boletim,setBoletim}){
    // const [envolvidos, setEnvolvidos] = useState([])

    // const atualizarEnvolvidos = ()=>{
    //     setBoletim({...boletim, envolvidos:envolvidos})
    // }
       

    return (
        <>
            <AddEnvolvido boletim={boletim} setBoletim={setBoletim} />
            <ListaEnvolvidos envolvidos={boletim.envolvidos}/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos