import React from "react";
import { Container, Table } from "react-bootstrap";
import Envolvido from "./Envolvido";


function ListaEnvolvidos ({handleEnvolvidos, handleRemoveEnvolvido}){
    return (
        <>
        <Container>
        <Table>
            <thead>
                <tr>
                <th>Envolvimento</th>
                <th>Nome</th>
                <th>Opões</th>
                </tr>
            </thead>
            <tbody>
                {handleEnvolvidos.map(envolvido=><Envolvido Envolvido={envolvido} handleRemoveEnvolvido={handleRemoveEnvolvido}/>)}
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default ListaEnvolvidos