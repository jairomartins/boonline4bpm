import axios from "axios"
import React, { useState } from "react"
import { Alert, Button, Container, Form} from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

function PasswordRecover (){
    const navigate = useNavigate() 

    const [newPassword, setNewPassword] = useState()

    const {id} = useParams()

    const [message, setMessage] = useState("")
    const [showMessage, setShowMessage ] = useState(false)
    const [messageType, setMessageType]  = useState()

    async function passswordChanger (e){
    console.log('passwordChanger')
    e.preventDefault()

    await axios.post(`http://127.0.0.1:433/recoverPassword`,{
        userId:id,
        userPassword:newPassword,
        }).then(function(response){
            setMessageType("success")
            setMessage(response.data.message)
            setShowMessage(true)
            console.log(response)
        }).catch((err)=>{
            setMessageType("danger")
            setMessage(err.response.data.message)
            setShowMessage(true)
            console.log(err)
        })

    }

    return (<>
        <Container>
            <br/>
            {showMessage ? (<Alert variant={messageType}>{message} <Button variant="link" onClick={(e)=>navigate('/')}>Fazer LogIn</Button></Alert>) : ""}
            
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