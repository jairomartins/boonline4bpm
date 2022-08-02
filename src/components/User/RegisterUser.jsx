import React, {useState} from "react";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"

function RegisterUser (){

    const [userName, setUserName] =  useState()
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()


    async function handleRegistar (e){
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:3001/auth/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userName,
                userEmail,
                userPassword
            }),
            
        })

        const data = await response.json()
        alert(data.message)
    }

    return ( <>
    
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
                        autoComplete="false"
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
                    <br/>
                    <Form.Control 
                        autoComplete="off"
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        placeholder="E-mail"/>
                    <br/>
                    <Form.Control
                        placeholder="senha"
                        onChange={(e)=>{setUserPassword(e.target.value)}}
                        type="password"/>
                    <br/>
                    <Button variant="success" type="submit">
                        Registrar
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