import React, { useState } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";

function AddMaterialApreendido ({handleAddMaterial}){

    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState()

    const handleAdicionarMaterial = () =>{
        handleAddMaterial({descricao,quantidade})
        console.log("adicionou -"+descricao)
    }


    return (
        <>
        <Container>
        <br></br>
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
                    <Button size="sm" onClick={handleAdicionarMaterial}> <MdLibraryAdd/></Button>
                </Col>
            </Row>
        </Container>
        
        </>
    )

}
export default AddMaterialApreendido