import React from "react";
import { Container, Table } from "react-bootstrap";
import Policial from "./Policial";

function Policiais ({policiais,handleRemoverPolicial}){

    return (
        <>
        
        <Container>
        <br></br>
        <Table size="sm">
            <thead>
                <tr>
                <th>VTR</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Opção</th>
                </tr>
            </thead>
            <tbody>
            
                {policiais.map(item=><Policial policial={item} handleRemoverPolicial={handleRemoverPolicial}/>)}
           
             </tbody>
        </Table>
        </Container>
        </>
    )

}

export default Policiais