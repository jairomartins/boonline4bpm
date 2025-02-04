import React, { useState, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Col, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

import { Context } from "../../Context/AuthContext";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

const LoginUser = () => {
    const { authenticated, setAuthenticated, municipio , setMunicipio } = useContext(Context);
    const navigate = useNavigate();
    
    // Estados para armazenar credenciais do usuário e status da requisição
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [erroShow, setErroShow] = useState(false);
    const [erroMessage, setErroMessage] = useState("");

    // Variáveis de ambiente para configuração da API
    const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;
    const API_PORT = process.env.REACT_APP_API_PORT;
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    // Verifica se o usuário já está autenticado ao carregar o componente
    useEffect(() => {
        const token = localStorage.getItem("x-access-token");
        const userID = localStorage.getItem("x-user-mat-id");
        
        if (token && userID) {
            setAuthenticated(true);
        }
    }, [setAuthenticated]);

    // Função para realizar login do usuário
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            // Envia requisição de login para a API
            const response = await axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/login`, {
                userEmail,
                userPassword,
            });
    
            // Salva os dados de autenticação no localStorage
            setAuthenticated(response.data.authenticated);
            localStorage.setItem("x-access-token", response.data.token);
            localStorage.setItem("x-user-mat-id", response.data.userID);
            localStorage.setItem("x-user-tipo", response.data.userTipo);
            localStorage.setItem("x-user-municipio", municipio);
        } catch (error) {
            setErroMessage(error.response?.data?.message || "Erro ao fazer login");
            setErroShow(true);
        } finally {
            setIsLoading(false);
        }
    };
    

    // Redireciona o usuário para o dashboard caso já esteja autenticado
    if (authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <Row className="justify-content-md-center">
            <Col sm={8} md={4}>
                {/* Exibe mensagem de erro caso ocorra falha no login */}
                {erroShow && <Alert variant="danger">{erroMessage}</Alert>}
                <LoadSpinner visible={isLoading} />
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleLogin}>
                            {/* Campo de seleção da cidade */}
                            <Form.Label>Selecione sua cidade:</Form.Label>
                            <Form.Select
                                value={municipio} // Usa o estado atualizado da cidade
                                size="sm"
                                onChange={(e) => {
                                    setMunicipio(e.target.value);
                                    localStorage.setItem("x-user-municipio", e.target.value); // Atualiza no localStorage
                                }}
                            >
                                {["Balsas", "Riachão", "Fortaleza dos Nogueiras", "Nova Colinas", "Feira Nova", "São Pedro dos Crentes", "Alto Parnaíba", "Tasso Fragoso", "Batavo"].map((cidadeNome, index) => (
                                    <option key={index} value={cidadeNome}>{cidadeNome}</option>
                                ))}
                            </Form.Select>

                            <br />
                            {/* Campo de entrada para e-mail */}
                            <Form.Control
                                size="sm"
                                required
                                autoComplete="on"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                placeholder="E-mail"
                            />
                            <br />
                            {/* Campo de entrada para senha */}
                            <Form.Control
                                size="sm"
                                required
                                placeholder="Senha"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                            />
                            <br />
                            {/* Botão de login */}
                            <Button size="sm" variant="success" type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                    {/* Links para recuperação de senha e registro */}
                    <Button variant="link" onClick={() => navigate('/emailverify')}>Esqueceu a senha?</Button>
                    <Button variant="link" onClick={() => navigate('/registro')}>Registre-se Aqui</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginUser;
