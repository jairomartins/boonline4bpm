import React from "react";
import { Container, FloatingLabel, Form, Row } from "react-bootstrap";
import NavPage from "../NavPage";

const Historico = ({boletim,setBoletim}) => {
    
    return ( <>
        <Container className="text-center">
            <h1>Historico da Ocorrencia</h1>
            <Row>
            <FloatingLabel controlId="floatingTextarea2" label="Histórico">
                <Form.Control
                as="textarea"
                placeholder="Histórico da Ocorrencia"
                style={{ height: '400px' }}
                />
            </FloatingLabel>
            </Row>
            <NavPage prev="/efetivo" next="/resumo"/>
        </Container>
    
    </> );
}
 
export default Historico;