import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL

function EmailVerify (){

    const navigate = useNavigate() 
    const [email, setEmail] = useState()
    const [message, setMessage] = useState("")
    const [showMessage, setShowMessage ]= useState(false)

    async function handleForgotPassword  (e){

        e.preventDefault()

        await axios.post(`http://${BASE_URL}:433/recuperarSenha`,{
            userEmail: email,
        })
        .then(function (response) {
            setShowMessage(true)
            console.log(response)
            setMessage(response.data.message)    
        })
        .catch(function (error) {
            setShowMessage(true)
            setMessage(error.data.message)
            console.error(error);
        })
        .then(function () {
            // sempre será executado
        });
    }


    return(<>
        <Container>
            <br/>
            <Alert> <p>Atenção: Caso exista um usuário registrado com o email informado será enviado un link para redefinir a senha, verifique sua caixa de entrada e/ou span.</p></Alert>
            <br/>
            {showMessage ? (<Alert variant="danger">{message}</Alert>) : ""}
            
            <Form onSubmit={handleForgotPassword} >
            <Form.Label>Digite seu email:</Form.Label>
            <Form.Control
                required
                placeholder="Confirme seu email"
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
            />

            <br/>
            <Button variant="success" type="submit">
                Recuperar senha
            </Button>

            <Button variant="link" onClick={(e)=>navigate('/')}>Retornar para login</Button>
            </Form>
           
        </Container>
    </>)
    
}

export default EmailVerify