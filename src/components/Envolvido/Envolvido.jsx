import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Button } from "react-bootstrap";


function Envolvido({Envolvido,boletim,setBoletim, setEnvolvido, setModoEdicao}){
    
    
    const handleRemoveEnvolvido = (id)=>{
      
        const newEnvolvidosList = boletim.envolvidos.filter(envolvido=>envolvido.id!==id)
        setBoletim({...boletim,envolvidos:newEnvolvidosList})
     
    }

    const handleClickEditar = (envolvido)=>{
        handleRemoveEnvolvido(envolvido.id)
        setModoEdicao(true)
        setEnvolvido(envolvido)
    }


    return(
        <>
        <tr>
            <td>{Envolvido.tipo}</td>
            <td>{Envolvido.nome}</td>
            <td >
            <Button variant="danger"
                size="sm"
                onClick={()=>{handleRemoveEnvolvido(Envolvido.id)}}>
                Excluir
                <MdDeleteForever/>
            </Button>
            <br/><br/>
            <Button variant="info"
                size="sm"
                onClick={()=>{handleClickEditar(Envolvido)}}
                >
                Editar
                <MdEdit></MdEdit>
            </Button>
            </td>

        </tr>
        </>
    )
}

export default Envolvido