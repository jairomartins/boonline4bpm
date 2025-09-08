import React, { useContext } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ImFileText } from "react-icons/im";
import { BiAddToQueue, BiUserCircle } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";
import { VscNewFile } from "react-icons/vsc";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { Context } from "../../Context/AuthContext";
import { BoletimContext } from "../../Context/BoletimContext";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const { setAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const { setBoletim } = useContext(BoletimContext);
  const userTipo = localStorage.getItem("x-user-tipo");

  const handleClickBoletim = () => navigate("boletim");
  const handleClickPerfil = () => navigate("/perfil");
  const handleClickGerenciarUsuarios = () => navigate("/administrador/usuarios");

  // -------------------------------
  // Iniciar novo boletim
  // -------------------------------
  const handleClickNovoBoletim = () => {
     const newBoletim = {
          id: uuidv4(),
          envolvidos: [],
          materiaisApreendidos: [],
          efetivo: [],
          images: [],
        };
    
        setBoletim(newBoletim);
        navigate("../boletim/header");
  };

  const handleClickSair = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const menuItems = [
    {
      title: "Novo Boletim",
      icon: <VscNewFile size={36} />,
      action: handleClickNovoBoletim,
      variant: "primary",
      highlight: true,
    },
    { title: "Boletins Registrados", icon: <ImFileText size={30} />, action: handleClickBoletim },
    { title: "Meu Perfil", icon: <BiUserCircle size={30} />, action: handleClickPerfil },
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
        {/* Menus em cards */}
        <Row className="g-3 justify-content-center">
          {menuItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className={`text-center shadow-sm border-0 rounded-3 h-100 ${
                  item.highlight ? "bg-primary text-white" : ""
                }`}
                onClick={item.action}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <div className="mb-2">{item.icon}</div>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Button
                    variant={item.variant || "primary"}
                    size="sm"
                    className={
                      item.highlight
                        ? "bg-light text-primary fw-bold border-0 mt-2"
                        : "mt-2"
                    }
                    onClick={item.action}
                  >
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botão Sair */}
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
