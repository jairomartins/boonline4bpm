import React, { useState } from "react";
import { Button, Col,Row,Container, Form ,ProgressBar, Card} from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {GiPoliceCar} from "react-icons/gi"
import axios from "axios";

const PROTOCOLO = process.env.REACT_APP_PROTOCOLO
const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL


function AddPolicial ({boletim,setBoletim}){
    const [vtr, setVtr] = useState('')
    const [nome, setNome] = useState('')
    const [graduacao, setGraduacao] = useState('')
    const [numeroBarra, setNumeroBarra] = useState('')
    const [id, setId] = useState('')


    /**Limpa os valores nos campos ja preenchidos */
    const resetaCampos = ()=>{
        setVtr('')
        setNome('')
        setGraduacao('')
        setNumeroBarra('')
        setId('')
    }

    const handelAddPolicialClick = (e)=>{

        e.preventDefault()

        const newPolicialList = [...boletim.efetivo,{
        vtr:vtr,
        graduacao:graduacao,
        numeroBarra:numeroBarra,
        nome:nome,
        id:id
        }]
        setBoletim ({...boletim, efetivo:newPolicialList})
        
        resetaCampos()
    }
    const handleClickBuscarUsuario = ()=>{
       
        axios.get(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/users/${id}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            
            console.log(response.data[0])
            console.log(response.data[0].userBarra)
            setNome(response.data[0].userName)
            setNumeroBarra(response.data[0].userBarra)
            setGraduacao(response.data[0].userGraduacao)
        }).catch(function (error) {
            console.error(error)
        })
        .then(function () {
            // sempre será executado
        });
    }


    return(
        <>  
            <Container fluid>
                <br/> 
                <ProgressBar variant="success" striped now={80} />
                <hr/>
                {/* {menssagem.estado?<Alert variant={menssagem.tipo} size="sm">{menssagem.texto}</Alert>:""} */}
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <GiPoliceCar/> Policiais
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handelAddPolicialClick}>
                            <Row>
                                <Col md={2} >
                                    <Form.Label>Prefixo da VTR:</Form.Label>
                                    <Form.Control
                                    size="sm"
                                    required
                                    name="Prefixo da Viatura"
                                    // onBlur={validaCampos}
                                    placeholder="EX.: 128"
                                    value={vtr}
                                    onChange={(e)=>{setVtr(e.target.value)}}
                                    />
                                </Col>
                                <Col md={2} >
                                    <Form.Label>Matrícula:</Form.Label>
                                    <Form.Control
                                    type="number"
                                    size="sm"
                                    required
                                    placeholder="ID / Matrícula"
                                    value={id}
                                    onBlur={handleClickBuscarUsuario}
                                    onChange={(e)=>setId(e.target.value)}
                                    />
                                </Col>
                                <Col md={2} >
                                    <Form.Label>Posto/Graduação:</Form.Label>
                                    <Form.Control
                                    required
                                    size="sm"
                                    name="Posto/Graduação"
                                    // onBlur={validaCampos}
                                    placeholder="Ex.:SD"
                                    value={graduacao}
                                    onChange={(e)=>setGraduacao(e.target.value)}
                                    />
                                </Col>
                                <Col md={2} >
                                    <Form.Label>Numero / Barra:</Form.Label>
                                    <Form.Control
                                    size="sm"
                                    placeholder="000/18"
                                    value={numeroBarra}
                                    onChange={(e)=>setNumeroBarra(e.target.value)}
                                    />
                                </Col>
                                <Col md={4} >
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control
                                    size="sm"
                                    required
                                    placeholder="Nome Completo"
                                    value={nome}
                                    onChange={(e)=>setNome(e.target.value)}
                                    />
                                </Col>
                                
                            </Row>
                            <br/>
                            <Row className="text-center">
                                <Col>
                                    <Button
                                        type="submit"
                                        size="sm"
                                        variant="success"
                                        // onClick={handelAddPolicialClick}
                                        >
                                            Adicionar Policial <BsFillPersonPlusFill/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
              
                <br/>
            </Container>
        </>
    )
}

export default AddPolicial