import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Button } from "react-bootstrap";


function Envolvido({Envolvido,boletim,setBoletim}){
    
    
    const handleRemoveEnvolvido = (id)=>{
        const newEnvolvidosList = boletim.envolvidos.filter(envolvido=>envolvido.id!==id)
        setBoletim({...boletim,envolvidos:newEnvolvidosList})
    }



    return(
        <>
        <tr>
            <td>{Envolvido.tipo}</td>
            <td>{Envolvido.nome}</td>
            <td>{Envolvido.telefone}</td>
            <td >
            <Button variant="danger"
                onClick={()=>{handleRemoveEnvolvido(Envolvido.id)}}>
                Excluir
                <MdDeleteForever/>
                </Button>

            <Button variant="info">
                Editar
                <MdEdit></MdEdit>
            </Button>
            </td>

        </tr>
        </>
    )
}

export default Envolvido