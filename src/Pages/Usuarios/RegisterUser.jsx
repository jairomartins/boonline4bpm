//  Registro de novos usuarios 
//  Conforme definido na api, email deve ser unico no banco de dados
//
//
import React, {useState} from "react";

import { useNavigate } from 'react-router-dom';

import axios from "axios";

import InputMask from 'react-input-mask';

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"

import Cabecalho from "../../components/Cabecalho/Cabecalho";
const BASE_URL = window.location.hostname
function RegisterUser (){

    const [userName, setUserName] =  useState()
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [userContato, setUserContato] =  useState()

    const navigate = useNavigate()


    //Faz a conexão via axios para registrar o usuario
    //Depois de registrado redireciona para tela de login
 
    async function handleRegistar (e){
        
        e.preventDefault()

        axios.post(`http://${BASE_URL}:3001/auth/register`,{
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword,
            userContato:userContato
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.message)
            navigate('/login')

        }).catch(function(error){
            console.log(error)
           
        })
    }

    return ( <>
    <Cabecalho texto={"Boletim Digital 4°BPM - Balsas  (2022.1)"}/>

    <Container>
        <br/>
        <Row  className="justify-content-md-center">
        <Col  sm={12} md={6}>
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Registar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleRegistar}>
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
                    <br/>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        placeholder="E-mail"/>
                    <br/>
                    <Form.Label>Contato:</Form.Label>
                    <InputMask 
                        className="form-control "
                        mask="(99) 9 9999-9999"
                        onChange={(e)=>{setUserContato(e.target.value)}}
                        placeholder="(99) 9 0000-0000"
                        />
                    <br/>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        placeholder="senha"
                        onChange={(e)=>{setUserPassword(e.target.value)}}
                        type="password"/>
                    <br/>
                    <Button variant="success" type="submit">
                        Registrar-se
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Col>          
        </Row>
    </Container>
    
    </> );
}
 
export default RegisterUser;