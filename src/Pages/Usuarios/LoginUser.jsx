import React,{useState, useContext} from "react";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"


import { Context } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";


const LoginUser = () => {

    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()

    const {authenticated, handleLogin} = useContext(Context);

    console.log('adm/loign', authenticated)


    async function clickHandleLogin(e){
        e.preventDefault()
        handleLogin(userEmail, userPassword)
    }

    return (  <>

        {authenticated && (
          <Navigate to="/" replace={true} />
        )}
    <Container className="text-center">
        <br/>
        <Row  className="justify-content-md-center">
        <Col sm={12} md={6}>
        <Card>
            <Card.Header>
                <Card.Title>Entrar</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={clickHandleLogin}>
                    <Form.Control 
                        autoComplete="on"
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
            <Card.Footer>
                Registre-se <a href="adm/registro">Aqui</a>
            </Card.Footer>
        </Card>
        </Col>          
        </Row>
    </Container>
    </>);
}
 
export default LoginUser;