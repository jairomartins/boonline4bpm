import React from "react";

import Logo4BPM from '../components/Logo4BPM';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Home = ()=>{
    return(
        <>
        <Container>
            <br/>
            <Row className="text-center">
                <Logo4BPM/>
            </Row>
            <br/>
            <Row> 
                <Col sm={12} className="text-center">
                <h3>Boletim de Ocorrencia PMMA 4°BPM </h3>
                <h5>(BETA) 2022</h5>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col sm={12} className="text-center mt-12 mb-12">
                    <Link to="/header">
                        <Button 
                            variant="success">
                                Iniciar
                        </Button>
                    </Link>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row className="text-center">
                <Col>Criado por : <a href="https://jairomartins.github.io">SD PM  J.Martins</a> </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home