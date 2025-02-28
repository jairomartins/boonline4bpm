import React,{useState, useContext, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Card, Col, Row, Form, Button, Alert} from "react-bootstrap"
import axios from "axios";

import { Context } from "../../Context/AuthContext";

import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";


const LoginUser = () => {
    const {authenticated, setAuthenticated, cidade, setCidade} = useContext(Context)
    
    useEffect(() => {
        const token = localStorage.getItem("x-access-token");
        const userID = localStorage.getItem("x-user-mat-id");
      
        if (token && userID) {
          // Definir o estado de autenticação com base nas informações armazenadas
          setAuthenticated(true);
          // Definir outros estados conforme necessário
        }
      }, [setAuthenticated]);

    const navigate = useNavigate() 
    
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [isLoading, setIsLoading] = useState(false)

    const [erroShow, setErroShow] = useState(false)
    const [erroMessage, setErroMessage] = useState("")

    
    const PROTOCOLO = process.env.REACT_APP_PROTOCOLO
    const API_PORT = process.env.REACT_APP_API_PORT
    const BASE_URL = process.env.REACT_APP_BASE_URL

    async function clickHandleLogin(e){
           
        e.preventDefault()
            
        setIsLoading(true) 


        //FAZ AUTENTICAÇÃO DO USUARIO NA API CONFERE EMAIL E SENHA
        //RECEBE UM TOKEN AUTENTICAÇÃO PARA REQUISIÇOES FEITAS

        await axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/login`,{
            userEmail: userEmail,
            userPassword: userPassword
        })
        .then(function (response) {

            setAuthenticated(response.data.authenticated)
            localStorage.setItem("x-access-token",response.data.token)
            localStorage.setItem("x-user-mat-id",response.data.userID)
            localStorage.setItem("x-user-tipo",response.data.userTipo)
            console.log(response.data)
            setIsLoading(false) 
            
        })
        .catch(function (error) {
            setErroMessage(error.response.data.message)
            console.error(error.response.data);
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

            <Row  className="justify-content-md-center">
                <Col sm={8} md={4}>

                <Alert variant="danger" show={erroShow}> {erroMessage}</Alert>
                <LoadSpinner visible={isLoading}/>
                <Card>
                    
                    <Card.Body>
                        <Form onSubmit={clickHandleLogin}>
                            <Form.Label>Selecione sua cidade :</Form.Label>
                            <Form.Select aria-label="Default select example"
                            defaultValue={cidade}
                            size={"sm"}
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
                                size={"sm"}
                                required 
                                autoComplete="on"
                                onChange={(e)=>{setUserEmail(e.target.value)}}
                                placeholder="E-mail"/>
                            <br/>
                            <Form.Control
                                size={"sm"}
                                required
                                placeholder="senha"
                                onChange={(e)=>{setUserPassword(e.target.value)}}
                                type="password"/>
                            <br/>
                            <Button  size={"sm"} variant="success" type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                    {/* <Card.Footer> */}
                        <Button variant="link" onClick={(e)=>navigate('/emailverify')}>Esqueceu a senha ?</Button>
                        <Button variant="link" onClick={(e)=>navigate('/registro')}>Registre-se  Aqui</Button>
                    {/* </Card.Footer> */}
                </Card>
                </Col>          
            </Row>
    </>)
}
 
export default LoginUser