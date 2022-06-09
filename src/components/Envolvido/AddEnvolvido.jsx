import React, { useState } from "react";

import { Col, Button, Container, Form, Row} from "react-bootstrap";
import {MdAdd} from "react-icons/md"




function AddEnvolvido ({handleAddEnvolvido}){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')



    return(

        
        <>  
            <Container>
                <br></br>
                <Row className="justify-content-center">
                    <h2>Adicionar Envolvido</h2>
                </Row>
                <br></br>
            </Container>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Form.Label>Tipo Envolvimento:</Form.Label>
                        <Form.Select size="sm" name="tipoEnvolvido"
                        defaultValue={tipoEnvolvido} 
                        onChange={(e)=>{setTipoEnvolvido(e.target.value)}}>
                        <option value="Autor" >Autor</option>
                        <option value="Suspeito">Suspeito</option>
                        <option value="Vitima">Vítima</option>
                        <option value="Testemunha">Tetemunha</option>
                        <option value="Comunicante">Comunicante</option>
                        <option value="Vítima Fatal">Vítima Fatal</option>
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setNome(e.target.value)}}
                        placeholder="Nome"
                        value={nome}
                    />
                    </Col >
                    <Col sm={3}>
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setCPF(e.target.value)}}
                        placeholder="CPF"
                        value={cpf}
                    />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Button 
                        variant="primary"
                        >
                        Adicionar
                        <MdAdd/>
                    </Button>
                </Row>
            </Container>
        </>
    )
}

export default AddEnvolvido