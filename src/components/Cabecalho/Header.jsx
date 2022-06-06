import React, { useState } from "react";
import AddOcorrencia from "./AddOcorrencia";


const Header = ()=>{

    const [ ocorrencia, setOcorrencia] = useState([])

    const handleAddOcorrencia = (o) =>{
        setOcorrencia(o)
        console.log(ocorrencia)
    }

    return(
        <>
        <AddOcorrencia handleAddOcorrencia={handleAddOcorrencia}/>
        </>
    )
}

export default Header