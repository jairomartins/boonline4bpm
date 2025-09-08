import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./cabecalho.css";
import "../Logo4BPM.css";

import logo4bpm from "../Logo_4bpm.png";

const Cabecalho = () => {
  return (
    <>
      <Container fluid className="py-3 border-bottom">
        <Row className="align-items-center">
          <Col xs={12} md={8} className="text-center text-md-start">
            <h4 className="fw-bold text-primary m-0">
              Boletim Eletrônico - 4° BPM
            </h4>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0"
          >
            <img
              src={logo4bpm}
              className="Logo-4bpm-cabecalho"
              alt="Logo do 4°BPM da PMMA"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cabecalho;
