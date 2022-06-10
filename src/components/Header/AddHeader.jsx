import React  from "react";

import {  Col, Container, Row, Form } from 'react-bootstrap';

function AddHeader ({boletim,setBoletim}){

    
    return (
        <>
        <br></br>
        <Container>
            <Row>
                <Col sm={3} className="text-center mt-12 mb-12">
                    <Form.Label>Número B.O</Form.Label>
                    <Form.Control 
                        size="sm"
                        defaultValue={boletim.numero}
                        placeholder="N° do Boletim"
                        onChange={(e)=>{setBoletim({...boletim, numero:e.target.value})}}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Form.Label>Natureza da Ocorrência : </Form.Label>
                    <Form.Control
                        required
                        size="sm"
                        defaultValue={boletim.natureza}
                        onChange={(e)=>{setBoletim({...boletim, natureza:e.target.value})}}
                        placeholder="EX.: Furto / Roubo"
                        
                    />
                </Col>
                <Col sm={2}>
                    <Form.Label>Data :  </Form.Label>
                    <Form.Control
                        size="sm"
                        type="date"
                        defaultValue={boletim.data}
                        onChange={(e)=>{setBoletim({...boletim, data:e.target.value})}}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Label>Horário : </Form.Label>
                    <Form.Control
                        size="sm"
                        type="time"
                        defaultValue={boletim.horario}
                        onChange={(e)=>{setBoletim({...boletim, horario:e.target.value})}}
                    />
                </Col>

            </Row>
            <br></br>
        </Container>
        </>
    )
}

export default AddHeader