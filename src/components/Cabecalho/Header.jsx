import React from "react";

import {  Col, Container, Row, FormControl } from 'react-bootstrap';

const Header = ()=>{
    return(
        <>
        <Container fluid>
            <Row>
            <Col sm={3} className="text-center mt-12 mb-12">
                <br/>
                <FormControl size="sm" 
                    placeholder="N° do Boletim"
                />
            </Col>
            </Row>

        </Container>
        </>
    )
}

export default Header