import React  from "react";

import {  Col, Container, Row, Form } from 'react-bootstrap';

function AddHeader ({boletim,setBoletim}){

    
    return (
        <>
        <br></br>
        <Container>
            <Form>
                <Row>
                    <Col sm={4} className="text-center mt-12 mb-12">
                        <Form.Label>Número B.O</Form.Label>
                        <Form.Control 
                            size="sm"
                            defaultValue={boletim.numero}
                            placeholder="N° do Boletim"
                            onChange={(e)=>{setBoletim({...boletim, numero:e.target.value})}}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Latitude : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Latitude"
                        defaultValue={boletim.latitude}
                        onChange={(e)=>{setBoletim({...boletim, latitude:e.target.value})}}/>
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Longitude : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Longitude"
                        defaultValue={boletim.longitude}
                        onChange={(e)=>{setBoletim({...boletim, longitude:e.target.value})}}/>
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
                            format="dd-mm-yyyy"
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

                <Row>
                    <Col sm={8}>
                        <Form.Label>Endereço : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Nome da Rua"
                        defaultValue={boletim.endereco}
                        onChange={(e)=>{setBoletim({...boletim, endereco:e.target.value})}}/>
                    </Col>
                    <Col sm={2}>
                        <Form.Label>Numero : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Numero"
                        defaultValue={boletim.numeroEndereco}
                        onChange={(e)=>{setBoletim({...boletim, numeroEndereco:e.target.value})}}/>
                    </Col>
                    <Col sm={2}>
                        <Form.Label>Bairro : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Nome do Bairro"
                        defaultValue={boletim.bairro}
                        onChange={(e)=>{setBoletim({...boletim, bairro:e.target.value})}}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Form.Label>Município : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Nome do Município"
                        defaultValue={boletim.municipio}
                        onChange={(e)=>{setBoletim({...boletim, municipio:e.target.value})}}/>
                    </Col>

                    <Col>
                        <Form.Label>Ponto de Referencia : </Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Pronto de referencia"
                        defaultValue={boletim.referencia}
                        onChange={(e)=>{setBoletim({...boletim, referencia:e.target.value})}}/>
                    </Col>
                </Row>
            </Form>
            <br></br>
        </Container>
        </>
    )
}

export default AddHeader