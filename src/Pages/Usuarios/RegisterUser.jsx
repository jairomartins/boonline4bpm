import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputMask from "react-input-mask";
import { Card, Col, Row, Container, Form, Button, Alert } from "react-bootstrap";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

const RegisterUser = () => {
    const navigate = useNavigate();

    // Estados agrupados
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userContato: "",
        userMatriculaId: "",
        userGraduacao: "",
        userBarra: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [erroShow, setErroShow] = useState(false);
    const [erroMensagem, setErroMensagem] = useState("");

    // Carregar variáveis de ambiente
    const API_PORT = process.env.REACT_APP_API_PORT;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;

    // Função para atualizar os estados de forma dinâmica
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    // Função para registrar o usuário
    const handleRegistrar = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErroShow(false);

        try {
            const response = await axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/register`, formData);
            
            alert(response.data.message);
            navigate("/");
        } catch (error) {
            setErroMensagem(error.response?.data?.message || "Erro ao registrar usuário.");
            setErroShow(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Cabecalho texto="Boletim Digital 4°BPM - Balsas (2022.1)" />

            <Container>
                <br />
                <Row className="justify-content-md-center">
                    <Col sm={12} md={6}>
                        {erroShow && <Alert variant="danger">{erroMensagem}</Alert>}

                        <Card>
                            <Card.Header className="text-center">
                                <Card.Title>Registrar Usuário</Card.Title>
                                <LoadSpinner visible={isLoading} />
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleRegistrar}>
                                    <Form.Group>
                                        <Form.Label>Usuário:</Form.Label>
                                        <Form.Control 
                                            required 
                                            name="userName" 
                                            value={formData.userName} 
                                            onChange={handleChange} 
                                            placeholder="Nome" 
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Matrícula ou ID:</Form.Label>
                                        <InputMask 
                                            required
                                            className="form-control"
                                            type="text"
                                            name="userMatriculaId"
                                            value={formData.userMatriculaId}
                                            onChange={handleChange}
                                            placeholder="Matrícula ou ID"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Graduação:</Form.Label>
                                        <Form.Control
                                            required
                                            name="userGraduacao"
                                            value={formData.userGraduacao}
                                            onChange={handleChange}
                                            placeholder="Ex.: Capitão"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Número da Barra:</Form.Label>
                                        <Form.Control
                                            required
                                            name="userBarra"
                                            value={formData.userBarra}
                                            onChange={handleChange}
                                            placeholder="Ex.: 123/21"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>E-mail:</Form.Label>
                                        <Form.Control 
                                            required 
                                            type="email" 
                                            name="userEmail" 
                                            value={formData.userEmail} 
                                            onChange={handleChange} 
                                            placeholder="E-mail" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Contato:</Form.Label>
                                        <InputMask 
                                            required
                                            className="form-control"
                                            mask="(99) 9 9999-9999"
                                            name="userContato"
                                            value={formData.userContato}
                                            onChange={handleChange}
                                            placeholder="(99) 9 0000-0000"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Senha:</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            name="userPassword"
                                            value={formData.userPassword}
                                            onChange={handleChange}
                                            placeholder="Senha"
                                        />
                                    </Form.Group>

                                    <br />

                                    <Button variant="success" type="submit" disabled={isLoading}>
                                        Registrar-se
                                    </Button>
                                    <Button variant="link" onClick={() => navigate("/emailverify")}>
                                        Esqueceu a senha?
                                    </Button>
                                    <Button variant="link" onClick={() => navigate("/")}>
                                        Retornar para login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RegisterUser;
