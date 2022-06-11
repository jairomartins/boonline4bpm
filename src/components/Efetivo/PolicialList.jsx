import React from "react";
import { Container, Table } from "react-bootstrap";
import Policial from "./Policial";

function PolicialList ({policiais,boletim,setBoletim}){
   
    return (
        <>
        
        <Container>
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
                
                    {policiais.map(item=><Policial key={item.id} policial={item} boletim={boletim} setBoletim={setBoletim}/>)}
            
                </tbody>
            </Table>
        </Container>
        </>
    )

}

export default PolicialList