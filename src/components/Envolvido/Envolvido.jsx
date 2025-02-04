import React, { useCallback } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Button } from "react-bootstrap";


function Envolvido({envolvido,boletim,setBoletim, setEnvolvido, setModoEdicao}){
    
    
    const handleRemoveEnvolvido = useCallback(() => {
        setBoletim(prevBoletim => ({
            ...prevBoletim,
            envolvidos: prevBoletim.envolvidos.filter(e => e.id !== envolvido.id)
        }));
    }, [envolvido.id, setBoletim]);

    const handleClickEditar = useCallback(() => {
        handleRemoveEnvolvido();
        setModoEdicao(true);
        setEnvolvido(envolvido);
    }, [handleRemoveEnvolvido, setModoEdicao, setEnvolvido, envolvido]);


    return(
        <>
        <tr>
            <td>{envolvido.tipo}</td>
            <td>{envolvido.nome}</td>
            <td >
            <Button variant="danger"
                size="sm"
                onClick={()=>{handleRemoveEnvolvido(envolvido.id)}}>
                Excluir
                <MdDeleteForever/>
            </Button>
            <br/><br/>
            <Button variant="info"
                size="sm"
                onClick={()=>{handleClickEditar(envolvido)}}
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