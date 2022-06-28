import React from "react";
import { Container, Table } from "react-bootstrap";
import Envolvido from "./Envolvido";


function EnvolvidoList ({boletim,setBoletim}){
    return (
        <>
        <Container fluid>
        <Table>
            <thead>
                <tr>
                <th>Envolvimento</th>
                <th>Nome</th>
                <th>Contato</th>
                <th>Opões</th>
                </tr>
            </thead>
            <tbody>
                {boletim.envolvidos.map(envolvido=><Envolvido key={envolvido.id} Envolvido={envolvido} boletim={boletim} setBoletim={setBoletim}/>)}
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default EnvolvidoList