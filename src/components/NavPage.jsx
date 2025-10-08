import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./NavPage.css";

const NavPage = ({ prev, next }) => {
  return (
    <div className="navpage-wrapper">
      <Container fluid className="navpage-container">
        <Row className="g-3 justify-content-center align-items-center">
          {/* Botão Voltar */}
          <Col xs={12} sm={6} md={4} className="d-grid">
            <Button
              as={Link}
              to={prev}
              variant="light"
              className="nav-btn nav-btn-prev"
            >
              <BsArrowLeft className="me-2" />
              Voltar
            </Button>
          </Col>

          {/* Botão Próximo */}
          <Col xs={12} sm={6} md={4} className="d-grid">
            <Button
              as={Link}
              to={next}
              variant="primary"
              className="nav-btn nav-btn-next"
            >
              Próximo
              <BsArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavPage;
