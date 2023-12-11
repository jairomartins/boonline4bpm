import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import InputMask from 'react-input-mask'
import {Card, Form, Button} from "react-bootstrap"



const CadastroUsuario = ()=>{
    // const {BASE_URL} = useContext(Context)

    const [userName, setUserName] =  useState()
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [userContato, setUserContato] =  useState()
    const [userMatriculaId, setUserMatriculaId] = useState()

    const navigate = useNavigate()

    const API_PORT = process.env.REACT_APP_API_PORT
    const BASE_URL = process.env.REACT_APP_BASE_URL

    //Faz a conexão via axios para registrar o usuario
    //Depois de registrado redireciona para tela de login
 
    async function handleRegistar (e){
        
        e.preventDefault()

        
        axios.post(`https://${BASE_URL}:${API_PORT}/register`,{
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword,
            userContato:userContato,
            userMatriculaId: userMatriculaId
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.status)
            navigate('/')

        }).catch(function(error){
            console.log(error)         

        })
    }
    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Registar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleRegistar}>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="Comum">Comum</option>
                        <option value="Copom">Copom</option>
                        <option value="P3">P3</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                    <br/>
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        required
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
                    <br/>
                    <Form.Label>Matrícula ou ID:</Form.Label>
                    <InputMask 
                        required
                        className="form-control "
                        type="number"
                        onChange={(e)=>{setUserMatriculaId(e.target.value)}}
                        placeholder="Mátricula ou ID"
                        />
                    <br/>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                        required
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        placeholder="E-mail"/>
                    <br/>
                    <Form.Label>Contato:</Form.Label>
                    <InputMask 
                        required
                        className="form-control "
                        mask="(99) 9 9999-9999"
                        onChange={(e)=>{setUserContato(e.target.value)}}
                        placeholder="(99) 9 0000-0000"
                        />
                    <br/>
                    
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        placeholder="senha"
                        onChange={(e)=>{setUserPassword(e.target.value)}}
                        type="password"/>
                    <br/>

                    

                    <Button variant="success" type="submit">
                        Registrar
                    </Button>
                </Form>
                
            </Card.Body>
        </Card>

    )
}
export default CadastroUsuario