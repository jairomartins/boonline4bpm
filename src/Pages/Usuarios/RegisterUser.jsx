//  Registro de novos usuarios 
//  Conforme definido na api, email deve ser unico no banco de dados
//
//
import React, {useState} from "react";

import { useNavigate } from 'react-router-dom';

import axios from "axios";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"

import Cabecalho from "../../components/Cabecalho/Cabecalho";

function RegisterUser (){

    const [userName, setUserName] =  useState()
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()

    const navigate = useNavigate()


    //Faz a conexão via axios para registrar o usuario
    //Depois de registrado redireciona para tela de login
 
    async function handleRegistar (e){
        
        e.preventDefault()

        axios.post('http://10.100.48.136:3001/auth/register',{
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword
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

    <Container className="text-center">
        <br/>
        <Row  className="justify-content-md-center">
        <Col  sm={12} md={6}>
        <Card>
            <Card.Header>
                <Card.Title>Registar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleRegistar}>
                    <Form.Control
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
                    <br/>
                    <Form.Control 
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        placeholder="E-mail"/>
                    <br/>
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