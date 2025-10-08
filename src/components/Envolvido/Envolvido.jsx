import React, { useCallback } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Button, Card } from "react-bootstrap";

function Envolvido({ envolvido, boletim, setBoletim, setEnvolvido, setModoEdicao }) {
  const handleRemoveEnvolvido = useCallback(() => {
    setBoletim((prev) => ({
      ...prev,
      envolvidos: prev.envolvidos.filter((e) => e.id !== envolvido.id),
    }));
  }, [envolvido.id, setBoletim]);

  const handleClickEditar = useCallback(() => {
    handleRemoveEnvolvido();
    setModoEdicao(true);
    setEnvolvido(envolvido);
  }, [handleRemoveEnvolvido, setModoEdicao, setEnvolvido, envolvido]);

  return (
    <Card className="envolvido-card shadow-sm w-100">
      <Card.Body>
        <Card.Title className="fw-bold text-primary">{envolvido.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{envolvido.tipo}</Card.Subtitle>
        {envolvido.bairro && (
          <Card.Text className="mb-2">
            <small>Bairro: {envolvido.bairro}</small>
          </Card.Text>
        )}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-info" size="sm" onClick={handleClickEditar}>
            <MdEdit className="me-1" /> Editar
          </Button>
          <Button variant="outline-danger" size="sm" onClick={handleRemoveEnvolvido}>
            <MdDeleteForever className="me-1" /> Excluir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Envolvido;
