import React from "react";

import { Col, Container, FormControl, Row, Form } from "react-bootstrap";

const EnderecoBo = ()=>{
    return(
        <>  <br></br>
            <Container>
                <Row className="justify-content-center">
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}>
                    <Form.Label>Endereço</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Nome da Rua"
                    
                    />
                    </Col >
                    <Col sm={4}>
                    <Form.Label>Número</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Número"
                    />
                    </Col>
                </Row>
            
                <Row>
                    <Col sm={4}>
                    <Form.Label>Bairro</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Ex.: Potosí"
                  
                    />
                    </Col >
                    <Col sm={4}>
                    <Form.Label>Complemento</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder=""
        
                    />
                    </Col >
                    <Col sm={4}>
                    <Form.Label>CEP</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Ex.:65800-000"
                   
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={12}>
                    <Form.Label>Ponto de Referência</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Ex.: Proximo ao Supermercado xyz"
                    />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={6}>
                    <Form.Label>Município</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Ex.: Balsas - Maranhao"
                    />
                    </Col >
                    <Col sm={6}>
                    <Form.Label>Tipo de Local:</Form.Label>
                    <FormControl
                    size="sm"
                    placeholder="Ex.: Residência"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
            </Container>
        </>
    )
}

export default EnderecoBo