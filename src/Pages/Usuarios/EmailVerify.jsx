import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import { Context } from "../../Context/AuthContext";

function EmailVerify (){

    const [email, setEmail] = useState()

    const {BASE_URL} = useContext(Context)

    async function handleForgotPassword  (e){

        e.preventDefault()
    

        console.log('entrando em esquecer a senha front')

        await axios.post(`http://${BASE_URL}:433/recuperarSenha`,{
            userEmail: email,
        })
        .then(function (response) {
            console.log(response)    
        })
        .catch(function (error) {
            
            console.error(error);

        })
        .then(function () {
            // sempre será executado
        });
    }


    return(<>
        <Container>
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
            </Form>
            
        </Container>
    </>)
    
}

export default EmailVerify