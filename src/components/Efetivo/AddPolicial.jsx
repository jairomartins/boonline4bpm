import React, { useState } from "react";
import { Button, Col,Row,Container, Form } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

function AddPolicial ({boletim,setBoletim}){
    const [vtr, setVtr] = useState('')
    const [nome, setNome] = useState('')
    const [graduacao, setGraduacao] = useState('')
    const [numeroBarra, setNumeroBarra] = useState('')
    const [id, setId] = useState('')


    const handelAddPolicialClick = ()=>{
        const newPolicialList = [...boletim.efetivo,{
            vtr:vtr,
            nome:nome,
            id:id
        }]

        setBoletim ({...boletim, efetivo:newPolicialList})
    }

    return(
        <>  <br/>
            <Container>
                <Row>
                    <Col md={2} >
                        <Form.Label>Prefixo da VTR:</Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="EX.: 128"
                        value={vtr}
                        onChange={(e)=>{setVtr(e.target.value)}}
                        />
                    </Col>
                    <Col md={2} >
                        <Form.Label>Posto/Graduação:</Form.Label>
                        <Form.Control
                        size="sm"
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
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                        />
                    </Col>
                    <Col md={2} >
                        <Form.Label>Matrícula:</Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="ID / Matrícula"
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                    </Col>
                </Row>
                <br/>
                <Row className="text-center">
                    <Col>
                        <Button
                            size="sm"
                            variant="success" 
                            onClick={handelAddPolicialClick}>
                                Adicionar Policial <BsFillPersonPlusFill/>
                        </Button>
                    </Col>
                </Row>
                <br/>
            </Container>
        </>
    )
}

export default AddPolicial