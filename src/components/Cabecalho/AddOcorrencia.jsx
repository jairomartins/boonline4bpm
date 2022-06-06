import React, { useState } from "react";

import {  Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function AddOcorrencia ({handleAddOcorrencia}){

    const [numeroBo, setNumeroBO] = useState('')
    const [natureza, setNatureza] = useState('')
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')


    const handleClickAdd =()=>{
        handleAddOcorrencia({numeroBo,natureza,data,horario})
    }

    return (
        <>
        <br></br>
        <Container>
            <Row>
                <Col sm={3} className="text-center mt-12 mb-12">
                    <Form.Label>Número B.O</Form.Label>
                    <Form.Control 
                        size="sm" 
                        placeholder="N° do Boletim"
                        value={numeroBo}
                        onChange={(e)=>{setNumeroBO(e.target.value)}}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Form.Label>Natureza da Ocorrência : </Form.Label>
                    <Form.Control
                        required
                        size="sm"
                        placeholder="EX.: Furto / Roubo"
                        onChange={(e)=>{setNatureza(e.target.value)}}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Label>Data : {data} </Form.Label>
                    <Form.Control
                        size="sm"
                        type="date"
                        onChange={(e)=>{setData(e.target.value)}}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Label>Horário : </Form.Label>
                    <Form.Control
                        size="sm"
                        type="time"
                        onChange={(e)=>{setHorario(e.target.value)}}
                    />
                </Col>

            </Row>
            <br></br>
            <Row >
                {/* <Col > */}
                <Link to="/">
                        <Button variant="outline-primary">Voltar</Button>
                    </Link>
                {/* </Col>
                <Col > */}
                    <Link to="/envolvido">
                        <Button variant="outline-primary" onClick={handleClickAdd}>Proximo</Button>
                    </Link>
                {/* </Col> */}
            </Row>
        </Container>
        </>
    )
}

export default AddOcorrencia