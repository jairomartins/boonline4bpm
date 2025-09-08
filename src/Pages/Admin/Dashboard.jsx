import React, { useContext } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ImFileText } from "react-icons/im";
import { BiAddToQueue, BiUserCircle } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { Context } from "../../Context/AuthContext";

const Dashboard = () => {
  const { setAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const userTipo = localStorage.getItem("x-user-tipo");

  const handleClickBoletim = () => navigate("boletim");
  const handleClickPerfil = () => navigate("/perfil");
  const handleClickGerenciarUsuarios = () => navigate("/administrador/usuarios");
  const handleClickSair = () => {
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("x-user-mat-id");
    setAuthenticated(false);
  };

  const menuItems = [
    { title: "Meu Perfil", icon: <BiUserCircle size={30} />, action: handleClickPerfil },
    { title: "Boletins", icon: <ImFileText size={30} />, action: handleClickBoletim },
    ...(userTipo === "admin"
      ? [
          {
            title: "Gerenciar Usuários",
            icon: <BiAddToQueue size={30} />,
            action: handleClickGerenciarUsuarios,
            variant: "warning",
          },
        ]
      : []),
  ];

  return (
    <>
      <Cabecalho />

      <Container className="mt-4">
        <Row className="g-3 justify-content-center">
          {menuItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className="text-center shadow-sm border-0 rounded-3 h-100"
                onClick={item.action}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <div className="mb-2 text-primary">{item.icon}</div>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Button
                    variant={item.variant || "primary"}
                    size="sm"
                    className="mt-2"
                    onClick={item.action}
                  >
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col className="d-grid">
            <Button onClick={handleClickSair} variant="outline-danger">
              <GiExitDoor className="me-2" />
              Sair
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
