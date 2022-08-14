import React from "react";

import { Row,Col } from "react-bootstrap";

const PolicialDetalhe = ({policial}) => {
    return ( <>
        <Row>
            <Col xg={2}><b>VTR:</b>{policial.vtr}</Col>
            <Col xg={2}><b>{policial.graduacao}</b> N°: {policial.numeroBarra}</Col>
            <Col xg={4}><b>Nome:</b> {policial.nome}</Col>
            <Col xg={2}><b>ID:</b> {policial.id}</Col>
            <Col xg={2}><b>Assinatura:</b>___________________________</Col>
        </Row>
    </>  );
}
 
export default PolicialDetalhe;