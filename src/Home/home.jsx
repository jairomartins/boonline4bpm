import React from "react";

import Logo4BPM from '../components/Logo4BPM';
import { Col, Container, Row } from 'react-bootstrap';

import LoginUser from "../Pages/Usuarios/LoginUser";


const Home = ()=>{
    return(
        <>
        <Container>
            <br/>
            <Row className="text-center">
                <Col>
                    <Logo4BPM/>
                </Col>
                
            </Row>
            <br/>
            <Row> 
                <Col sm={12} className="text-center">
                <h3>Boletim de Ocorrência Online</h3>
                <p><i>Versão 2025.01.27</i></p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col sm={12} className="text-center mt-12 mb-12">
                    <LoginUser/>
                </Col>
            </Row>
            <br/>
           
            <br/>
            <br/>
            <Row className="text-center">
                <Col>Criado por : <b>SD PM  J.Martins 871110 - 2021 </b></Col>
            </Row>
        </Container>
        </>
    )
}

export default Home