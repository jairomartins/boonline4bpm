import React, { useState } from "react";
import AddPolicial from "./AddPolicial";
import Policiais from "./Policiais";

function Efetivo  (){

    const [policiais, setPoliciais] = useState([
        {
            id:871110,
            nome:"SD PM 194/18 J. MARTINS",
            vtr:128
        }
    ])

    const handleAddPolicial = (policial)=>{
        const newPolicial = [
            ...policiais,{
                id:policial.id,
                nome:policial.nome,
                vtr:policial.vtr
            }
        ]

        setPoliciais(newPolicial)
    }

    const handleRemoverPolicial = (idPolicial)=>{
        const newPoliciais = policiais.filter(policial=>policial.id!==idPolicial)
        setPoliciais(newPoliciais)
    }

    return(

        <>
        <br></br>

        <AddPolicial handelAddPolicial={handleAddPolicial}/>
        <Policiais policiais={policiais}  handleRemoverPolicial={handleRemoverPolicial}/>
        </>
    )
}

export default Efetivo