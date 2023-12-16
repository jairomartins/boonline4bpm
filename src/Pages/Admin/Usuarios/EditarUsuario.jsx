import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import InputMask from 'react-input-mask'
import {Card, Form, Button} from "react-bootstrap"



const EditarUsuario = ({usuario})=>{
    // const {BASE_URL} = useContext(Context)

    const [userName, setUserName] =  useState(usuario?.userName)
    const [userEmail, setUserEmail] =  useState(usuario?.userEmail)
    const [userPassword, setUserPassword] =  useState(usuario?.userPassword)
    const [userContato, setUserContato] =  useState(usuario?.userContato)
    const [userMatriculaId, setUserMatriculaId] = useState(usuario?.userMatriculaId)
    const [userTipo, setUserTipo] = useState(usuario?.tipo)

    const navigate = useNavigate()

    const API_PORT = process.env.REACT_APP_API_PORT
    const BASE_URL = process.env.REACT_APP_BASE_URL


    function limpaCampos(){
        setUserName("")
        setUserEmail("")
        setUserPassword("")
        setUserContato("")
        setUserMatriculaId("")
        setUserTipo("Comum")
    }
    //Faz a conexão via axios para registrar o usuario
    //Depois de registrado redireciona para tela de login
 
    async function handleUpdate (e){
        
        e.preventDefault()

        axios.put(`https://${BASE_URL}:${API_PORT}/users/${usuario.userMatriculaId}`,{
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword,
            userContato:userContato,
            userMatriculaId: userMatriculaId,
            tipo:userTipo
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.message)
            limpaCampos()
            navigate('/administrador/usuarios')

        }).catch(function(error){
            console.log(error)         

        })
    }
    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Editar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleUpdate}>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Select onChange={(e)=>setUserTipo(e.target.value)}>
                        <option value="Comum">Comum</option>
                        <option value="Copom">Copom</option>
                        <option value="P3">P3</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                    <br/>
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        required
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
                    <br/>
                    <Form.Label>Matrícula ou ID:</Form.Label>
                    <InputMask 
                        required
                        value={userMatriculaId}
                        className="form-control "
                        type="number"
                        onChange={(e)=>{setUserMatriculaId(e.target.value)}}
                        placeholder="Mátricula ou ID"
                        />
                    <br/>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                        required
                        value={userEmail}
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        placeholder="E-mail"/>
                    <br/>
                    <Form.Label>Contato:</Form.Label>
                    <InputMask 
                        required
                        value={userContato}
                        className="form-control "
                        mask="(99) 9 9999-9999"
                        onChange={(e)=>{setUserContato(e.target.value)}}
                        placeholder="(99) 9 0000-0000"
                        />
                    <br/>
                    
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        value={userPassword}
                        placeholder="senha"
                        onChange={(e)=>{setUserPassword(e.target.value)}}
                        type="password"/>
                    <br/>

                    

                    <Button variant="warning" type="submit">
                        Salvar Alteraçoes
                    </Button>
                </Form>
                
            </Card.Body>
        </Card>

    )
}
export default EditarUsuario