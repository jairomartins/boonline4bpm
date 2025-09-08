import { Card, Row, Col} from "react-bootstrap";


const BoletimList = ({ boletimList }) => {

  return (
    <div className="d-flex flex-column gap-3">
      {boletimList.map((boletim) => {

        return (
          <Card key={boletim._id} className="shadow-sm border-0 rounded-3">
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

            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default BoletimList;
