import React from "react";
import { Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function Policial({policial,boletim,setBoletim}){

    const handleRemoverPolicial = (id) =>{
        const newEfetivo = boletim.efetivo.filter(policial=>policial.id!==id)
        setBoletim({...boletim,efetivo:newEfetivo})
    }
    return(<>
        <tr>
            <td>{policial.vtr}</td>
            <td>{policial.nome}</td>
            <td>{policial.id}</td>
            <td >
                <Button variant="danger"
                onClick={()=>{handleRemoverPolicial(policial.id)}}>
                    <MdDeleteForever/>
                </Button>
            </td>
        </tr>
    </>)
}

export default Policial