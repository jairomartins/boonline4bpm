import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import InputMask from 'react-input-mask'
import {Card, Col, Row, Container, Form, Button, Alert} from "react-bootstrap"

// import { Context } from "../../Context/AuthContext";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner"

function RegisterUser (){

    // const {BASE_URL} = useContext(Context)

    const [userName, setUserName] =  useState()
    const [userEmail, setUserEmail] =  useState()
    const [userPassword, setUserPassword] =  useState()
    const [userContato, setUserContato] =  useState()
    const [userMatriculaId, setUserMatriculaId] = useState()
    const [userGraduacao, setUserGraduacao] = useState();
    const [userBarra, setUserBarra] = useState();

    const [isLoading, setIsLoading] = useState(false)
    const [erroShow, setErroShow] = useState(false)
    const [erroMessagem, setErroMessagem] = useState("")

    const navigate = useNavigate()

    const API_PORT = process.env.REACT_APP_API_PORT
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const PROTOCOLO  =  process.env.REACT_APP_PROTOCOLO

    //Faz a conexão via axios para registrar o usuario
    //Depois de registrado redireciona para tela de login
 
    async function handleRegistar (e){
        
        e.preventDefault()

        
        setIsLoading(true)
        
        axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/register`,{
            userName:userName,
            userEmail:userEmail,
            userPassword:userPassword,
            userContato:userContato,
            userMatriculaId: userMatriculaId,
            userGraduacao: userGraduacao, // Novos campos
            userBarra: userBarra,   
        })
        .then(function (response){
            console.log(response.data)
            alert(response.data.status)
            navigate('/')
            setIsLoading(false)
        }).catch(function(error){
            console.log(error)
            setErroShow(true)
            setErroMessagem(error.response.data.message)
            
            setIsLoading(false)
        })

        // setIsLoading(false)
    }

    return ( <>
    <Cabecalho texto={"Boletim Digital 4°BPM - Balsas  (2022.1)"}/>

    <Container>
        <br/>
        <Row  className="justify-content-md-center">
        <Col  sm={12} md={6}>

        <Alert variant="danger" show={erroShow}>
            {erroMessagem}
        </Alert>

        <Card>
            <Card.Header className="text-center">
                <Card.Title>Registar Usuário</Card.Title>
                <LoadSpinner visible={isLoading}/>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleRegistar}>
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
                    <Form.Label>Graduação:</Form.Label>
                    <Form.Control
                        required
                        onChange={(e) => setUserGraduacao(e.target.value)}
                        placeholder="Ex.: Capitão"
                    />
                    <br />

                    <Form.Label>Número da Barra:</Form.Label>
                    <Form.Control
                        required
                        onChange={(e) => setUserBarra(e.target.value)}
                        placeholder="Ex.: 123/21"
                    />
                    <br />
                    
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
                        Registrar-se
                    </Button>
                    <Button variant="link" onClick={(e)=>navigate('/emailverify')}>Esqueceu a senha ?</Button>
                    <Button variant="link" onClick={(e)=>navigate('/')}>Retornar para login</Button>
                </Form>
                
            </Card.Body>
        </Card>
        </Col>          
        </Row>
    </Container>
    
    </> )
}
 
export default RegisterUser;