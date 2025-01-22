import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import InputMask from 'react-input-mask'
import {Card, Form, Button} from "react-bootstrap"



const EditarUsuario = ({usuario, setExibirFormEdicao})=>{

    const [userName, setUserName] =  useState(usuario?.userName)
    const [userEmail, setUserEmail] =  useState(usuario?.userEmail)
    const [userPassword, setUserPassword] =  useState(usuario?.userPassword)
    const [userContato, setUserContato] =  useState(usuario?.userContato)
    const [userMatriculaId, setUserMatriculaId] = useState(usuario?.userMatriculaId)
    const [userTipo, setUserTipo] = useState(usuario?.tipo)

    const navigate = useNavigate()

    const PROTOCOLO = process.env.REACT_APP_PROTOCOLO
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
        },{
            headers :{
                "x-access-token":localStorage.getItem("x-access-token")
            },
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.message)
            limpaCampos()
            setExibirFormEdicao(false)
            navigate('/administrador/usuarios')

        }).catch(function(error){
            console.log(error)         

        })
    }
    async function handleUpdatePassword (e){
        
        e.preventDefault()
        console.log("editando senha")
        axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/recoverPassword/${usuario?._id}`,{
            userPassword:userPassword
        },{
            headers :{
                "x-access-token":localStorage.getItem("x-access-token")
            },
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.message)
            limpaCampos()
            setExibirFormEdicao(false)
            navigate('/administrador/usuarios')

        }).catch(function(error){
            console.log(error)         

        })
    }
    return (
        <>
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Editar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleUpdate}>
                    <Form.Label>Matrícula ou ID:</Form.Label>
                    <InputMask 
                        disabled
                        required
                        value={userMatriculaId}
                        className="form-control "
                        type="number"
                        onChange={(e)=>{setUserMatriculaId(e.target.value)}}
                        placeholder="Mátricula ou ID"
                        />
                    <br/>
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Select onChange={(e)=>setUserTipo(e.target.value)}>
                        <option value="Comum" selected={userTipo === "Comum"}>Comum</option>
                        <option value="Copom" selected={userTipo === "Copom"}>Copom</option>
                        <option value="P3" selected={userTipo === "P3"}>P3</option>
                        <option value="admin" selected={userTipo === "admin"}>Admin</option>
                    </Form.Select>
                    <br/>
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        required
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        placeholder="Nome"/>
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
                    <Button variant="warning" type="submit">
                        Salvar Alteraçoes
                    </Button>
                </Form>
                
            </Card.Body>
        </Card>
        <br/>
        <Card>
        <Card.Header className="text-center">
            <Card.Title>Alterar Senha</Card.Title>
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleUpdatePassword}>
            
                <Form.Control
                    required
                    placeholder="senha"
                    onChange={(e)=>{setUserPassword(e.target.value)}}
                    type="password"/>
                <br/> 

                <Button variant="warning" type="submit">
                    Confirmar
                </Button>
            </Form>
            
        </Card.Body>
        </Card>
        </>
    )
}
export default EditarUsuario