import React, { useContext, useMemo } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Envolvido from "./Envolvido";
import { BoletimContext } from "../../Context/BoletimContext";
import "./EnvolvidoList.css";

function EnvolvidoList({ setEnvolvido, setModoEdicao }) {
  const { boletim, setBoletim } = useContext(BoletimContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const envolvidos = boletim?.envolvidos || [];

  const envolvidosMemo = useMemo(() => (
    envolvidos.map((envolvido) => (
      <Col
        key={envolvido.id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="mb-3 d-flex align-items-stretch"
      >
        <Envolvido
          envolvido={envolvido}
          boletim={boletim}
          setBoletim={setBoletim}
          setEnvolvido={setEnvolvido}
          setModoEdicao={setModoEdicao}
        />
      </Col>
    ))
  ), [envolvidos, boletim, setBoletim, setEnvolvido, setModoEdicao]);

  if (envolvidos.length === 0) return null; // não exibe lista se estiver vazia

  return (
    <Container fluid className="envolvido-list mt-4">
      <h5 className="mb-3 text-center text-primary">Envolvidos Cadastrados</h5>
      <Row>{envolvidosMemo}</Row>
    </Container>
  );
}

export default EnvolvidoList;
