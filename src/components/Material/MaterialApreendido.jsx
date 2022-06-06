import React from "react";
import { Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function MaterialApreendido ({materialApreendido,handleMaterialApreendidoRemove}){
    
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
export default MaterialApreendido