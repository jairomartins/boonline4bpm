import React,{useState} from "react";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"


const LoginUser = () => {

    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()


    async function handleLogin (e){
        e.preventDefault()

        const response = await fetch('http://localhost:3000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userEmail,
                userPassword
            }),
            
        })

        const data = await response.json()
        console.log(data)
    }
    return (  <>
    <Container className="text-center">
        <br/>
        <Row  className="justify-content-md-center">
        <Col sm={12} md={6}>
        <Card>
            <Card.Header>
                <Card.Title>Entrar</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleLogin}>
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
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Col>          
        </Row>
    </Container>
    </>);
}
 
export default LoginUser;