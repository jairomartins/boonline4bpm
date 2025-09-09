import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// URL da API a partir da variável de ambiente
const API_URL = process.env.REACT_APP_API_URL;

function UserProfile() {
  const [idAntigo, setIdAntigo] = useState("");
  const [userData, setUserData] = useState({});
  const [erroShow, setErroShow] = useState(false);
  const [erroMessagem, setErroMessagem] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const id = localStorage.getItem('x-user-mat-id');

  // Fetch user data from the API on load
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`${API_URL}/users/${id}`, {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        });

        setUserData(response.data[0]);
        setIdAntigo(response.data[0].userMatriculaId); // guarda id antigo
      } catch (error) {
        console.error(error);
        setErroShow(true);
        setErroMessagem("Erro ao carregar dados do usuário.");
      }
    }
    fetchUserData();
  }, [id]);

  // Handle form submission to update user data
  async function handleUpdateProfile(e) {
    e.preventDefault();
    setErroShow(false);
    setSuccessMessage("");

    try {
      await axios.put(`${API_URL}/users/${idAntigo}`, {
        userMatriculaId: userData.userMatriculaId,
        userName: userData.userName,
        userEmail: userData.userEmail,
        userPassword: userData.userPassword,
        userContato: userData.userContato,
        tipo: userData.userTipo,
        userBarra: userData.userBarra,
        userGraduacao: userData.userGraduacao
      }, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });

      localStorage.setItem("x-user-mat-id", userData.userMatriculaId); // atualiza id
      setSuccessMessage("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      setErroShow(true);
      setErroMessagem("Erro ao atualizar perfil. Verifique os dados e tente novamente.");
    }
  }

  // Handle password change
  async function handleChangePassword(e) {
    e.preventDefault();
    const newPassword = prompt("Digite a nova senha:");

    if (!newPassword) return;

    setErroShow(false);
    setSuccessMessage("");

    try {
      await axios.post(`${API_URL}/users/recoverPassword/${userData._id}`, {
        userPassword: newPassword
      }, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });

      setSuccessMessage("Senha alterada com sucesso!");
    } catch (error) {
      console.error(error);
      setErroShow(true);
      setErroMessagem("Erro ao alterar a senha.");
    }
  }

  return (
    <>
      <Cabecalho texto={"Perfil do Usuário"} />

      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <Alert variant="danger" show={erroShow}>{erroMessagem}</Alert>
            <Alert variant="success" show={!!successMessage}>{successMessage}</Alert>

            <Card>
              <Card.Header className="text-center">
                <Card.Title>Gerenciar Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleUpdateProfile}>
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    required
                    value={userData.userName || ""}
                    onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                  />
                  <br />
                  <Form.Label>Matrícula:</Form.Label>
                  <Form.Control
                    value={userData.userMatriculaId || ""}
                    onChange={(e) => setUserData({ ...userData, userMatriculaId: e.target.value })}
                  />
                  <br />
                  <Form.Label>Graduação/Posto:</Form.Label>
                  <Form.Control
                    value={userData.userGraduacao || ""}
                    onChange={(e) => setUserData({ ...userData, userGraduacao: e.target.value })}
                  />
                  <br />
                  <Form.Label>Número/Barra:</Form.Label>
                  <Form.Control
                    value={userData.userBarra || ""}
                    onChange={(e) => setUserData({ ...userData, userBarra: e.target.value })}
                  />
                  <br />
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    value={userData.userEmail || ""}
                    onChange={(e) => setUserData({ ...userData, userEmail: e.target.value })}
                  />
                  <br />
                  <Form.Label>Contato:</Form.Label>
                  <Form.Control
                    value={userData.userContato || ""}
                    onChange={(e) => setUserData({ ...userData, userContato: e.target.value })}
                  />
                  <br />
                  <Button variant="success" type="submit">Salvar Alterações</Button>
                  <Button variant="danger" className="ms-2" onClick={handleChangePassword}>Alterar Senha</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />
        <Row>
          <Col className="text-center">
            <Button variant="outline-primary">
              <Link className="text-decoration-none" to="/dashboard"><BsArrowLeft /> Voltar</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
