import React from "react";

import { Row,Col } from "react-bootstrap";

const PolicialDetalhe = ({policial}) => {
    return ( <>
        <Row>
            <Col xg={2}>VTR:{policial.vtr}</Col>
            <Col xg={2}>{policial.graduacao} N°: {policial.numeroBarra}</Col>
            <Col xg={6}>Nome: {policial.nome}</Col>
            <Col xg={2}>ID: {policial.id}</Col>
        </Row>
    </>  );
}
 
export default PolicialDetalhe;