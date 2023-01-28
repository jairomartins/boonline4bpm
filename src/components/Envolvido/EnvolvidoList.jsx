import React from "react";
import { Container, Table } from "react-bootstrap";
import Envolvido from "./Envolvido";


function EnvolvidoList ({boletim,setBoletim, setEnvolvido, setModoEdicao}){
    return (
        <>
        <Container fluid>
        <Table>
            <thead>
                <tr>
                <th>Envolvimento</th>
                <th>Nome</th>
                <th>Opões</th>
                </tr>
            </thead>
            <tbody>
                {boletim.envolvidos.map(envolvido=><Envolvido key={envolvido.id} Envolvido={envolvido} boletim={boletim} setBoletim={setBoletim} envolvido={envolvido} setEnvolvido={setEnvolvido} setModoEdicao={setModoEdicao}/>)}
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default EnvolvidoList