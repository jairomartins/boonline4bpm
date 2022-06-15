import React from "react";
import { Col, Row } from "react-bootstrap";

const MaterialDetalhe = ({material}) => {
    return (
        <>
        <Row>
            <Col>Descrição : {material.descricao}</Col>
            <Col></Col>
            <Col>Quantidade : {material.quantidade}</Col>
        </Row>
        </>
      );
}
 
export default MaterialDetalhe;