import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function PolicialList({ policiais, boletim, setBoletim }) {
  if (!policiais || policiais.length === 0) return null;

  const handleRemoverPolicial = (id) => {
    const newEfetivo = boletim.efetivo.filter((p) => p.id !== id);
    setBoletim({ ...boletim, efetivo: newEfetivo });
  };

  return (
    <Container className="my-4">
      <h5 className="fw-bold mb-3 text-center text-primary">Efetivo Empregado</h5>

      <Row className="g-3">
        {policiais.map((policial) => (
          <Col key={policial.id} xs={12} sm={6} md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-semibold text-dark mb-1">
                  {policial.nome || "Policial sem nome"}
                </Card.Title>

                <Card.Subtitle className="text-muted mb-2">
                  Matrícula: {policial.id}
                </Card.Subtitle>

                <Card.Text className="text-secondary">
                  VTR: <span className="fw-semibold">{policial.vtr || "—"}</span>
                </Card.Text>

                <div className="d-flex justify-content-end mt-3">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoverPolicial(policial.id)}
                  >
                    <MdDeleteForever className="me-1" />
                    Excluir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PolicialList;
