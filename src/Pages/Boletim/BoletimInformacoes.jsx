import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimInformacoes = ({ boletim, setBoletim }) => {
  const usuarioLogadoID = localStorage.getItem("x-user-mat-id");
  const userTipo = localStorage.getItem("x-user-tipo");

  const boletimDoUsuario = boletim?.efetivo.find(
    (efetivo) => efetivo.id === usuarioLogadoID
  );

  if (!boletim) {
    return (
      <Alert variant="danger" className="mt-3 text-center">
        Boletim não encontrado!!
      </Alert>
    );
  }

  return (
    <Card className="shadow-sm mt-3">
      <Card.Body>
        <Card.Title className="text-primary fw-bold text-uppercase">
            {boletim.natureza}
        </Card.Title>

        <div className="mb-2">
          <strong>Data:</strong> {boletim.data}
        </div>
        <div className="mb-2">
          <strong>Número:</strong> {boletim.numero}
        </div>
        <div className="mb-3">
          <strong>Município:</strong> {boletim.municipio}
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <Button as={Link} to="/BoFromBD" variant="outline-primary" size="sm">
            Ver
          </Button>

          {(boletimDoUsuario != null || userTipo === "admin") && (
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
};

export default BoletimInformacoes;
