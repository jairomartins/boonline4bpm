import React from "react";

import { Col, Container, FormControl, Row } from "react-bootstrap";

const EnderecoBo = ()=>{
    return(
        <>  
            <Container>
                <Row className="justify-content-center">
                <h2>Endereço</h2>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}>
                    <FormControl
                    placeholder="Local"
                    aria-label="Username"
                    />
                    </Col >
                    <Col sm={4}>
                    <FormControl
                    placeholder="Número"
                    aria-label="Username"
                    />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={12}>
                    <FormControl
                    placeholder="Logradouro"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                    <FormControl
                    placeholder="Bairro"
                    aria-label="Username"
                    />
                    </Col >
                    <Col sm={4}>
                    <FormControl
                    placeholder="Complemento"
                    aria-label="Username"
                    />
                    </Col >
                    <Col sm={4}>
                    <FormControl
                    placeholder="CEP"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={12}>
                    <FormControl
                    placeholder="Referência"
                    aria-label="Username"
                    />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={6}>
                    <FormControl
                    placeholder="Município"
                    aria-label="Username"
                    />
                    </Col >
                    <Col sm={6}>
                    <FormControl
                    placeholder="Tipo de Local"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
            </Container>
        </>
    )
}

export default EnderecoBo