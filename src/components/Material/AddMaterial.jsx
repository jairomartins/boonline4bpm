import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Button, Col, Container, Form, Row, ProgressBar} from "react-bootstrap";
import { MdAddBox } from "react-icons/md";

function AddMaterial({boletim,setBoletim}){

    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState()

    const addMaterial = () =>{
        const newMaterial = [...boletim.materiaisApreendidos,{
            id:uuidV4(),
            descricao:descricao,
            quantidade:quantidade
        }]

        setBoletim({...boletim,materiaisApreendidos:newMaterial })
    }


    return (
        <>
        <Container>
            <br/>
            <ProgressBar variant="success" striped now={60} />
            <hr/>
            <Row>
                <Col md={10} sm={10}>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control size="sm"
                    placeholder="Descrição"
                    onChange={(e)=>{setDescricao(e.target.value)}}
                    />
                </Col>
                <Col md={2} sm={2}>
                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control size="sm"
                    placeholder="QTD"
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
                        onClick={addMaterial}>
                             Adicionar Material <MdAddBox/>
                    </Button>
                </Col>
            </Row>
        </Container>
        
        </>
    )

}
export default AddMaterial