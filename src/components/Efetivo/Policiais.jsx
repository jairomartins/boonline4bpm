import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
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
        <Container>
                <Row className="d-grid gap-2">
                        <Button variant="outline-primary"><a href="/material">Voltar</a></Button>
                        <Button variant="outline-primary" ><a href="/relato">Proximo</a></Button>
                </Row>
        </Container>
        </>
    )

}

export default Policiais