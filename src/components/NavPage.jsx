import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const NavPage = ({ prev, next }) => {
  return (
    <Container className="my-4">
      <Row className="g-3 justify-content-center">
        {/* Botão Voltar */}
        <Col xs={12} sm={6} md={4} className="d-grid">
          <Button
            as={Link}
            to={prev}
            variant="outline-primary"
            className="fw-semibold py-2"
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
            className="fw-semibold py-2"
          >
            Próximo
            <BsArrowRight className="ms-2" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NavPage;
