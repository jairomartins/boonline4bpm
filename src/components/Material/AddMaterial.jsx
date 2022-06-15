import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";

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
            <Row>
                <Col md={8} sm={8}>
                    <FormControl size="sm"
                    placeholder="Descrição"
                    onChange={(e)=>{setDescricao(e.target.value)}}
                    />
                </Col>
                <Col md={2} sm={2}>
                    <FormControl size="sm"
                    placeholder="QTD"
                    onChange={(e)=>{setQuantidade(e.target.value)}}
                    />
                </Col>
                <Col md={2} sm={2}>
                    <Button size="sm" onClick={addMaterial}> <MdLibraryAdd/></Button>
                </Col>
            </Row>
        </Container>
        
        </>
    )

}
export default AddMaterial