import React, { useEffect } from "react";
import { Col, Container, Row, Form, ProgressBar, Card } from "react-bootstrap";
import InputMask from "react-input-mask";
import { GrDocumentTime } from "react-icons/gr";
import { ImLocation } from "react-icons/im";

function FormCabecalho({ boletim, setBoletim, municipio }) {
  useEffect(() => {
    setBoletim((prev) => ({ ...prev, municipio }));
  }, [municipio, setBoletim]);

  // Função genérica para atualizar os campos
  const handleChange = (field, value) => {
    setBoletim((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Container fluid>
      <br />
      <ProgressBar variant="success" striped now={20} />
      <hr />
      <Form>
        {/* CARD DADOS GERAIS */}
        <Card>
          <Card.Header>
            <Card.Title>
              <GrDocumentTime /> Dados Gerais
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="well">
              <Col sm={4}>
                <Form.Label>Número B.O</Form.Label>
                <Form.Control
                  type="number"
                  size="sm"
                  value={boletim.numero || ""}
                  placeholder="N° do Boletim"
                  onChange={(e) => handleChange("numero", e.target.value)}
                />
              </Col>

              <Col sm={2}>
                <Form.Label>Data do Fato :</Form.Label>
                <InputMask
                  mask="99/99/9999"
                  className="form-control form-control-sm"
                  size="sm"
                  value={boletim.data || ""}
                  onChange={(e) => handleChange("data", e.target.value)}
                />
              </Col>

              <Col sm={2}>
                <Form.Label>Horário do Fato :</Form.Label>
                <Form.Control
                  size="sm"
                  type="time"
                  value={boletim.horario || ""}
                  onChange={(e) => handleChange("horario", e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Natureza da Ocorrência :</Form.Label>
                <Form.Control
                  required
                  size="sm"
                  value={boletim.natureza || ""}
                  onChange={(e) => handleChange("natureza", e.target.value)}
                  placeholder="EX.: Furto / Roubo"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <br />

        {/* CARD LOCALIZAÇÃO */}
        <Card>
          <Card.Header>
            <Card.Title>
              <ImLocation /> Localização do Fato
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col sm={3}>
                <Form.Label>Latitude :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Latitude"
                  value={boletim.latitude || ""}
                  onChange={(e) => handleChange("latitude", e.target.value)}
                />
              </Col>
              <Col sm={3}>
                <Form.Label>Longitude :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Longitude"
                  value={boletim.longitude || ""}
                  onChange={(e) => handleChange("longitude", e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <Form.Label>Endereço :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Nome da Rua"
                  value={boletim.endereco || ""}
                  onChange={(e) => handleChange("endereco", e.target.value)}
                />
              </Col>
              <Col sm={2}>
                <Form.Label>Número :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Número"
                  value={boletim.numeroEndereco || ""}
                  onChange={(e) => handleChange("numeroEndereco", e.target.value)}
                />
              </Col>
              <Col sm={2}>
                <Form.Label>Bairro :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Nome do Bairro"
                  value={boletim.bairro || ""}
                  onChange={(e) => handleChange("bairro", e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <Form.Label>Município :</Form.Label>
                <Form.Control
                  disabled
                  size="sm"
                  placeholder="Município"
                  value={boletim.municipio || ""}
                />
              </Col>

              <Col>
                <Form.Label>Ponto de Referência :</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Ponto de referência"
                  value={boletim.referencia || ""}
                  onChange={(e) => handleChange("referencia", e.target.value)}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
      <br />
    </Container>
  );
}

export default FormCabecalho;
