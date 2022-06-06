import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "react-bootstrap";


function Envolvido({Envolvido,handleRemoveEnvolvido}){
    return(
        <>
        <tr>
            <td>{Envolvido.tipoEnvolvido}</td>
            <td>{Envolvido.nome}</td>
            <td >
            <Button variant="danger"
                onClick={()=>{handleRemoveEnvolvido(Envolvido.id)}}>
                <MdDeleteForever/>
                </Button>
            </td>
        </tr>
        </>
    )
}

export default Envolvido