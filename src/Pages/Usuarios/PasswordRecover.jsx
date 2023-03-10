import axios from "axios"
import React, { useState } from "react"
import { Button, Container, Form} from "react-bootstrap"
import { useParams } from "react-router-dom"

function PasswordRecover (){

    const [newPassword, setNewPassword] = useState()

    const {id} = useParams()

    console.log(id)

    async function passswordChanger (e){
    console.log('passwordChanger')
    e.preventDefault()

    await axios.post(`http://127.0.0.1:433/recoverPassword`,{
        userId:id,
        userPassword:newPassword,
        }).then(function(response){
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

    }

    return (<>
        <Container>
            <Form onSubmit={passswordChanger}>
            <Form.Label>Nova Senha:</Form.Label>
            <Form.Control
                required
                placeholder="Digite sua nova senha"
                onChange={(e)=>{setNewPassword(e.target.value)}}
                type="password"
            />

            <br/>
             <Button variant="success" type="submit">
                        Alterar Senha
            </Button>
            </Form>

           
        </Container>
    </>)
}
export default PasswordRecover