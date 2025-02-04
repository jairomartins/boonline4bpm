import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputMask from "react-input-mask";
import { Card, Form, Button, Alert } from "react-bootstrap";

const CadastroUsuario = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userContato, setUserContato] = useState("");
    const [userMatriculaId, setUserMatriculaId] = useState("");
    const [userGraduacao, setUserGraduacao] = useState("");
    const [userBarra, setUserBarra] = useState("");
    const [userTipo, setUserTipo] = useState("Comum");
    const [erroMessagem, setErroMessagem] = useState("");
    const [erroShow, setErroShow] = useState(false);

    const navigate = useNavigate();

    const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;
    const API_PORT = process.env.REACT_APP_API_PORT;
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    function limpaCampos() {
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        setUserContato("");
        setUserMatriculaId("");
        setUserGraduacao("");
        setUserBarra("");
        setUserTipo("Comum");
    }

    async function handleRegistrar(e) {
        e.preventDefault();
        setErroShow(false);
        setErroMessagem("");

        axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/register`, {
            userName,
            userEmail,
            userPassword,
            userContato,
            userMatriculaId,
            userGraduacao,
            userBarra,
            tipo: userTipo
        })
        .then(response => {
            alert(response.data.message);
            limpaCampos();
            navigate("/administrador/usuarios");
        })
        .catch(error => {
            console.error(error);
            setErroShow(true);
            setErroMessagem(error.response?.data?.message || "Erro ao registrar usuário.");
        });
    }

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title>Registrar Usuário</Card.Title>
            </Card.Header>
            <Card.Body>
                {erroShow && <Alert variant="danger">{erroMessagem}</Alert>}

                <Form onSubmit={handleRegistrar}>
                    <Form.Label>Tipo de Acesso:</Form.Label>
                    <Form.Select value={userTipo} onChange={(e) => setUserTipo(e.target.value)}>
                        <option value="Comum">Comum</option>
                        <option value="Copom">Copom</option>
                        <option value="P3">P3</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                    <br />

                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nome"
                    />
                    <br />

                    <Form.Label>Matrícula ou ID:</Form.Label>
                    <InputMask
                        required
                        value={userMatriculaId}
                        className="form-control"
                        type="number"
                        onChange={(e) => setUserMatriculaId(e.target.value)}
                        placeholder="Matrícula ou ID"
                    />
                    <br />

                    <Form.Label>Graduação:</Form.Label>
                    <Form.Control
                        required
                        value={userGraduacao}
                        onChange={(e) => setUserGraduacao(e.target.value)}
                        placeholder="Ex.: Capitão"
                    />
                    <br />

                    <Form.Label>Número da Barra:</Form.Label>
                    <Form.Control
                        required
                        value={userBarra}
                        onChange={(e) => setUserBarra(e.target.value)}
                        placeholder="Ex.: 123/21"
                    />
                    <br />

                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                    <br />

                    <Form.Label>Contato:</Form.Label>
                    <InputMask
                        required
                        value={userContato}
                        className="form-control"
                        mask="(99) 9 9999-9999"
                        onChange={(e) => setUserContato(e.target.value)}
                        placeholder="(99) 9 0000-0000"
                    />
                    <br />

                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                    />
                    <br />

                    <Button variant="success" type="submit">
                        Registrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default CadastroUsuario;
