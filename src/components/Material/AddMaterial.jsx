import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Button, Col, Container, Form, Row, ProgressBar, Card} from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

function AddMaterial({boletim,setBoletim}){

    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')


    const resetaCampos =()=>{
        setDescricao('')
        setQuantidade('')
    }

    const addMaterial = (e) =>{

        e.preventDefault()

        const newMaterial = [...boletim.materiaisApreendidos,{
            id:uuidV4(),
            descricao:descricao,
            quantidade:quantidade
        }]

        setBoletim({...boletim,materiaisApreendidos:newMaterial })

        resetaCampos()
    }


    return (
        <>
        <Container fluid>
            <br/>
            <ProgressBar variant="success" striped now={60} />
            <hr/>
            <Card>
                <Card.Header>
                    <Card.Subtitle> <FaBoxes/> Descrição dos Objetos Apresentados</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                <Form onSubmit={addMaterial}>
                    <Row>
                            <Col md={10} sm={10}>
                                <Form.Label>Descrição: </Form.Label>
                                <Form.Control size="sm"
                                placeholder="Descrição"
                                value={descricao}
                                required
                                onChange={(e)=>{setDescricao(e.target.value)}}
                                />
                            </Col>
                            <Col md={2} sm={2}>
                                <Form.Label>Quantidade:</Form.Label>
                                <Form.Control size="sm"
                                value={quantidade}
                                placeholder="QTD"
                                required
                                onChange={(e)=>{setQuantidade(e.target.value)}}
                                />
                            </Col>
                        
                    </Row>
                    <br/>
                    <Row className="text-center">
                        <Col>
                            <Button
                                size="sm"
                                variant="success"
                                type="submit"
                                >
                                    Adicionar Material <MdAddBox/>
                            </Button>
                        </Col>
                    </Row>
                </Form>
                </Card.Body>
            </Card>
        </Container>
        
        </>
    )

}
export default AddMaterial