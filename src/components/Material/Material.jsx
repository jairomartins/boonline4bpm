import React from "react";
import { Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function Material ({boletim,setBoletim,materialApreendido}){

    const handleMaterialApreendidoRemove = (id)=>{
        const newMateriais = boletim.materiaisApreendidos.filter(item=> item.id!==id)
        setBoletim({...boletim, materiaisApreendidos:newMateriais})
    }
    
    return(
        <>
        <tr>
            <td >{materialApreendido.descricao}</td>
            <td >{materialApreendido.quantidade}</td>
            <td ><Button  variant="danger"
                onClick={()=>{handleMaterialApreendidoRemove(materialApreendido.id)}}>
                
                <MdDeleteForever/>

                </Button>
            </td>
        </tr>
        </>
    )

}
export default Material