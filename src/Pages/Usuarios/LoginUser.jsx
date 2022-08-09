import React,{useState, useContext} from "react";
import axios from "axios";

import {Card, Col, Row, Container, Form, Button, Alert} from "react-bootstrap"


import { Context } from "../../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";


const LoginUser = () => {

    const navigate = useNavigate() 
    
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [isLoading, setIsLoading] = useState(false)

    const [erroShow, setErroShow] = useState(false)
    const [erroMessage, setErroMessage] = useState("")

    const {authenticated, setAuthenticated} = useContext(Context);

    async function clickHandleLogin(e){
           
    e.preventDefault()
           
    setIsLoading(true) 

    axios.post(`http://177.153.59.153:433/auth/login`,{
        userEmail: userEmail,
        userPassword: userPassword
    })
    .then(function (response) {
        // manipula o sucesso da requisição
        setAuthenticated(response.data.authenticated)
        localStorage.setItem("access-token",response.data.token)
        setIsLoading(false) 
        
    })
    .catch(function (error) {
        // manipula erros da requisição
        setErroMessage(error.response.data.status)
        console.error(error.response.data.status);
        setIsLoading(false) 
        setErroShow(true)
    })
    .then(function () {
        // sempre será executado
    });
          
    }

    return (  <>
        {/* Se o usuário ja estiver autenticado redireciona para o / */}
        {authenticated && (
          <Navigate to="/header" replace={true} />
        )}

        <Container className="text-center">
            <br/>
            <Row  className="justify-content-md-center">
            <Col sm={12} md={6}>

            <Alert variant="danger" show={erroShow}> {erroMessage}</Alert>

            <Card>
                <Card.Header>
                    <Card.Title>Entrar</Card.Title>

                    <LoadSpinner visible={isLoading}/>

                </Card.Header>
                <Card.Body>
                    <Form onSubmit={clickHandleLogin}>
                        <Form.Control
                            required 
                            autoComplete="on"
                            onChange={(e)=>{setUserEmail(e.target.value)}}
                            placeholder="E-mail"/>
                        <br/>
                        <Form.Control
                            required
                            placeholder="senha"
                            onChange={(e)=>{setUserPassword(e.target.value)}}
                            type="password"/>
                        <br/>
                        
                        <Button variant="success" type="submit" disabled={isLoading}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button variant="link" onClick={(e)=>navigate('/registro')}>Registre-se  Aqui</Button>
                </Card.Footer>
            </Card>
            </Col>          
            </Row>
        </Container>
    </>);
}
 
export default LoginUser;