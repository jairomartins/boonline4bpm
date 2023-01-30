import React,{useState, useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Card, Col, Row, Container, Form, Button, Alert} from "react-bootstrap"
import axios from "axios";

import { Context } from "../../Context/AuthContext";

import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";


const LoginUser = () => {

    const navigate = useNavigate() 
    
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [isLoading, setIsLoading] = useState(false)

    const [erroShow, setErroShow] = useState(false)
    const [erroMessage, setErroMessage] = useState("")

    const {authenticated, setAuthenticated, BASE_URL, cidade, setCidade} = useContext(Context)

    async function clickHandleLogin(e){
           
        e.preventDefault()
            
        setIsLoading(true) 


        //FAZ AUTENTICAÇÃO DO USUARIO NA API CONFERE EMAIL E SENHA
        //RECEBE UM TOKEN TE AUTENTICAÇÃO PARA REQUISIÇOES FEITAS
        //
        //
        axios.post(`http://${BASE_URL}:433/auth/login`,{
            userEmail: userEmail,
            userPassword: userPassword
        })
        .then(function (response) {
            // manipula o sucesso da requisição
            setAuthenticated(response.data.authenticated)
            localStorage.setItem("x-access-token",response.data.token)
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

    const handleSetCidade = (cidade)=>{
        setCidade(cidade)
    }

    return (  <>
        {/* Se o usuário ja estiver autenticado redireciona para o / */}
        {authenticated && (
          <Navigate to="/dashboard" replace={true} />
        )}

        <Container >
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
                            <Form.Label>Selecione sua cidade :</Form.Label>
                            <Form.Select aria-label="Default select example"
                            defaultValue={cidade}
                            
                            onChange={(e)=>{handleSetCidade(e.target.value)}}
                            >
                                <option value="Balsas">Balsas</option>
                                <option value="Riachão">Riachão</option>
                                <option value="Fortaleza dos Nogueiras">Fortaleza dos Nogueiras</option>
                                <option value="Nova Colinas">Nova Colinas</option>
                                <option value="Feira Nova">Feira Nova</option>
                                <option value="São Pedro dos Crentes">São Pedro dos Crentes</option>
                                <option value="Alto Parnaíba">Alto Parnaíba</option>
                                <option value="Tasso Fragoso">Tasso Fragoso</option>
                                <option value="Batavo">Distrito Batavo (Balsas)</option>
                                </Form.Select>
                            <br/>
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
    </>)
}
 
export default LoginUser