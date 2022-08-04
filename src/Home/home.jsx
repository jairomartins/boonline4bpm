import React from "react";

import Logo4BPM from '../components/Logo4BPM';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {BiLogInCircle} from "react-icons/bi"


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
                    <Link to="/login">
                        <Button 
                            variant="success">
                                Entrar <BiLogInCircle/>
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
                <Col>Criado por : <b>SD PM  J.Martins </b></Col>
            </Row>
        </Container>
        </>
    )
}

export default Home