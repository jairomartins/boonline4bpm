import React from "react";
import { Col, Row } from "react-bootstrap";

const MaterialDetalhe = ({material}) => {
    return (
        <>
        <Row>
            <Col><b>Descrição: </b>{material.descricao}</Col>
            <Col></Col>
            <Col><b>Quantidade: </b> {material.quantidade}</Col>
        </Row>
        </>
      );
}
 
export default MaterialDetalhe;