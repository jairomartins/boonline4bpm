import React, {useState} from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormBuscarBo from "../../components/Form/FormBuscarBo";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";

const Dashboard = () => {
            
    const [show, setShow] = useState(true);
    return ( 

    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(beta)"}/>
            
        <Container>
            <br/>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <FormBuscarBo/>
                </Col>
            </Row>
            <hr/>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        Boletim não encontrado !
                    </Alert>
                    
                    <BoletimInformacoes/>
                </Col>
            </Row>
        </Container>

    </> );
}
 
export default Dashboard;