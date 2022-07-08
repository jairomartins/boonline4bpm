import React from "react";

import {Card, Col, Row, Container, Form, Button} from "react-bootstrap"


const LoginUser = () => {
    return (  <>
    <Container className="text-center">
        <br/>
        <Row  className="justify-content-md-center">
        <Col sm={12} md={6}>
        <Card>
            <Card.Header>
                <Card.Title>Entrar</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Control 
                    autoComplete="off"
                    placeholder="E-mail"/>
                    <br/>
                    <Form.Control
                    placeholder="senha"
                    type="password"/>
                    <br/>
                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Col>          
        </Row>
    </Container>
    </>);
}
 
export default LoginUser;