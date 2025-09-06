import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimList = ({ boletimList }) => {
  const usuarioLogadoID = localStorage.getItem("x-user-mat-id");
  const userTipo = localStorage.getItem("x-user-tipo");

  return (
    <div className="d-flex flex-column gap-3">
      {boletimList.map((boletim) => {
        const boletimDoUsuario = boletim?.efetivo?.some(
          (efetivo) => efetivo.id === usuarioLogadoID
        );

        return (
          <Card key={boletim.id} className="shadow-sm border-0 rounded-3">
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <Card.Title className="text-uppercase fw-bold text-primary">
                    {boletim.natureza}
                  </Card.Title>
                </Col>
                <Col xs={6}>
                  <small className="text-muted">Data</small>
                  <div>{boletim.data}</div>
                </Col>
                <Col xs={6}>
                  <small className="text-muted">Número</small>
                  <div>{boletim.numero}</div>
                </Col>
                <Col xs={12} className="mt-2">
                  <small className="text-muted">Município</small>
                  <div>{boletim.municipio}</div>
                </Col>
              </Row>

              <div className="d-flex gap-2 mt-3">
                <Button
                  as={Link}
                  to="/BoFromBD"
                  variant="outline-primary"
                  size="sm"
                >
                  Ver
                </Button>

                {(boletimDoUsuario || userTipo === "admin") && (
                  <Button
                    as={Link}
                    to="/boletim/header"
                    variant="outline-success"
                    size="sm"
                  >
                    Editar
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default BoletimList;
