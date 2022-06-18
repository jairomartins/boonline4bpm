import React, { useState } from "react";
import { Button, Col,Row,Container, Form} from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

import InputMask from 'react-input-mask';

function AddPolicial ({boletim,setBoletim}){
    const [vtr, setVtr] = useState('')
    const [nome, setNome] = useState('')
    const [graduacao, setGraduacao] = useState('')
    const [numeroBarra, setNumeroBarra] = useState('')
    const [id, setId] = useState('')

    const validaCampos = (e) =>{
    //    let count = 1
    //    while(count <= 5)
        // e.target.name.map(name=>console.log(name))
        for (let i = 0; i < e.target.length-1; i++) {
            let element = e.target[i].value==='';
            console.log(element)
            if(element){
                break
            }
        }

    }

    const handelAddPolicialClick = (e)=>{
        e.preventDefault()
        if((menssagem.estado)){
            const newPolicialList = [...boletim.efetivo,{
            vtr:vtr,
            graduacao:graduacao,
            numeroBarra:numeroBarra,
            nome:nome,
            id:id
        }]
        validaCampos()
        setBoletim ({...boletim, efetivo:newPolicialList})
    }
    }

 

    return(
        <>  <br/>
            
            <Container>
                {/* {menssagem.estado?<Alert variant={menssagem.tipo} size="sm">{menssagem.texto}</Alert>:""} */}
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
                            <Form.Label>Posto/Graduação:</Form.Label>
                            <Form.Control
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
                <br/>
            </Container>
        </>
    )
}

export default AddPolicial