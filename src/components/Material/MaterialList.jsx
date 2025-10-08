import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function MaterialList({ boletim, setBoletim }) {
  if (!boletim.materiaisApreendidos || boletim.materiaisApreendidos.length === 0) {
    return null;
  }

  const handleMaterialApreendidoRemove = (id) => {
    const newMateriais = boletim.materiaisApreendidos.filter((item) => item.id !== id);
    setBoletim({ ...boletim, materiaisApreendidos: newMateriais });
  };

  return (
    <Container className="my-4">
      <h5 className="fw-bold mb-3 text-center text-primary">Materiais Apreendidos</h5>
      <Row className="g-3">
        {boletim.materiaisApreendidos.map((material) => (
          <Col key={material.id} xs={12} sm={6} md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-semibold text-dark">
                  {material.descricao || "Material sem descrição"}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Quantidade: {material.quantidade || "—"}
                </Card.Subtitle>

                <div className="d-flex justify-content-end mt-3">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleMaterialApreendidoRemove(material.id)}
                  >
                    <MdDeleteForever size={18} className="me-1" />
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

export default MaterialList;
