import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./cabecalho.css";
import "../Logo4BPM.css";

const CabecalhoBoletim = ({ texto }) => {
  return (
    <Container fluid className="px-0">
      <Row className="cabecalho-boletim align-items-center text-center shadow-sm">
        <Col>
          <h4 className="titulo-cabecalho">{texto}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default CabecalhoBoletim;
