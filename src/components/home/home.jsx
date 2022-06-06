import React from "react";

import Logo4BPM from '../Logo4BPM';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
        <Container fluid>
            <Row className="justify-content-center">
                <Logo4BPM/>
            </Row>
            <Row> 
                <Col sm={12} className="text-center">
                <h3>Boletim de Ocorrencia PMMA 4°BPM </h3>
                </Col>
            </Row>
            <Row>
            <Col sm={12} className="text-center mt-12 mb-12">
                <br/>
                <Link to="/header">
                    <Button variant='success'>Iniciar</Button>
                </Link>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default Home