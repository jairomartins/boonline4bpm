import React,{useState, useContext} from "react";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"


import { Context } from "../../Context/AuthContext";

const axios = require('axios');


const LoginUser = () => {

    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()

    const {authenticated, handleLogin} = useContext(Context);

    console.log('adm/loign', authenticated)


    async function clickHandleLogin(e){

        e.preventDefault()

        axios.post("http://localhost:3000/auth/login",{
                userEmail: userEmail,
                userPassword: userPassword
        })
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response.data.user);
          })
          .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
          })
          .then(function () {
            // sempre será executado
          });

         handleLogin(userEmail, userPassword)
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
                <Form onSubmit={clickHandleLogin}>
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