import React, { useState } from "react";
import { Button, Col,Row,Container, Form } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

function AddPolicial ({boletim,setBoletim}){
    const [vtr, setVtr] = useState('')
    const [nome, setNome] = useState('')
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
                        placeholder=""
                        value={vtr}
                        onChange={(e)=>{setVtr(e.target.value)}}
                        />
                    </Col>
                    <Col md={6} >
                        <Form.Label>Policial:</Form.Label>
                        <Form.Control
                        size="sm"
                        placeholder="Posto/Graduação - N° - Nome"
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