import React, { useState } from "react";
import { Button, Col,Row,Container, FormControl } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";

function AddPolicial ({handelAddPolicial}){
    const [vtr, setVtr] = useState('')
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')


    const handelAddPolicialClick = ()=>{
        handelAddPolicial({vtr,nome,id})
        setVtr('')
        setNome('')
        setId('')
    }
    return(
        <>
            <Container>
                <Row>
                    <Col md={2} >
                        <FormControl
                        size="sm"
                        placeholder="Viatura"
                        value={vtr}
                        onChange={(e)=>{setVtr(e.target.value)}}
                        />
                    </Col>
                    <Col md={6} >
                        <FormControl
                        size="sm"
                        placeholder="Posto/Graduação - N° - Nome"
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                        />
                    </Col>
                    <Col md={2} >
                        <FormControl
                        size="sm"
                        placeholder="ID / Matrícula"
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                    </Col>
                    <Col md={2} sm={2}>
                    <Button onClick={handelAddPolicialClick} > <MdLibraryAdd/></Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddPolicial