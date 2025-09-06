import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoRow = ({ label, value }) => (
  <div className="mb-2">
    <strong>{label}:</strong> {value}
  </div>
);

const BoletimInformacoes = ({ boletim, setBoletim }) => {
  const usuarioLogadoID = localStorage.getItem("x-user-mat-id");
  const userTipo = localStorage.getItem("x-user-tipo");

  // Verifica se o boletim e o efetivo existem antes de tentar encontrar o usuário
  const boletimDoUsuario = boletim?.efetivo?.find(
    (efetivo) => efetivo.id === usuarioLogadoID
  );

  const podeEditar = Boolean(boletimDoUsuario) || userTipo === "admin";

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
          {boletim.natureza?.toUpperCase() || "NATUREZA NÃO INFORMADA"}
        </Card.Title>

        <InfoRow label="Data" value={boletim.data || "-"} />
        <InfoRow label="Número" value={boletim.numero || "-"} />
        <InfoRow label="Município" value={boletim.municipio || "-"} />

        <div className="d-flex gap-2 flex-wrap">
          <Button as={Link} to="/BoFromBD" variant="outline-primary" size="sm">
            Ver
          </Button>

          {podeEditar && (
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
