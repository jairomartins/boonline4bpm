import React, { useState } from "react";
import AddEnvolvido from "./AddEnvolvido";
import ListaEnvolvidos from "./ListaEnvolvidos";
import { v4 as uuidv4 } from "uuid";

function Envolvidos (){

    const [envolvidos,setEnvolvidos] = useState(
        [
            {
                id:uuidv4(),
                tipoEnvolvimento:"Vítima",
                nome:"Fullano",
                cpf:"000.001.002-33",
                nascimento:"23/12/2098"
            },
            {
                id:uuidv4(),
                tipoEnvolvimento:"Vítima",
                nome:"Fullano",
                cpf:"000.001.002-33",
                nascimento:"23/12/2098"
            }
        ]
    )

    const handleAddEnvolvido = (envolvido)=>{
        const newEnvolvido = [
            ...envolvidos,{
                id:uuidv4(),
                tipoEnvolvido:envolvido.tipoEnvolvido,
                nome:envolvido.nome,
                cpf:envolvido.cpf,
                rg:envolvido.rg,
                sexo:envolvido.sexo,
                nascimento:envolvido.nascimento,
                endereco:envolvido.endereco,
                municipio:envolvido.municipio,
                telefone:envolvido.telefone,
                nomeMae:envolvido.nomeMae,
                obs:envolvido.obs
            }
        ]
        setEnvolvidos(newEnvolvido)
    }

    const handleRemoveEnvolvido = (idenvolvido)=>{
        const newEnvolvido = envolvidos.filter(envolvido=>envolvido.id!==idenvolvido)
         setEnvolvidos(newEnvolvido)
    }
    return (
        <>
            <AddEnvolvido handleAddEnvolvido={handleAddEnvolvido}/>
            <ListaEnvolvidos handleEnvolvidos={envolvidos} handleRemoveEnvolvido={handleRemoveEnvolvido}/>
        </>
    )
}

export default Envolvidos