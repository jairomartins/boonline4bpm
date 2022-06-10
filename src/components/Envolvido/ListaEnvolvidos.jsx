import React from "react";
import { Container, Table } from "react-bootstrap";
import Envolvido from "./Envolvido";


function ListaEnvolvidos ({envolvidos}){
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
                {envolvidos.map(envolvido=><Envolvido key={envolvido.id} Envolvido={envolvido}/>)}
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default ListaEnvolvidos