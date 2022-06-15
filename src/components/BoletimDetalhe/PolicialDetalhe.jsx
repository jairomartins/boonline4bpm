import React from "react";

import { Row,Col } from "react-bootstrap";

const PolicialDetalhe = ({policial}) => {
    return ( <>
        <Row>
            <Col>{policial.vtr}</Col>
            <Col>{policial.nome}</Col>
            <Col>{policial.id}</Col>
        </Row>
    </>  );
}
 
export default PolicialDetalhe;