import React from "react";
import { Col, Row } from "react-bootstrap";

import './cabecalho.css'

const Cabecalho = ({texto}) => {
    return ( 
        <>
            <Row className="container-cabecalho">
                <Col>
                    <h2>{texto}</h2>
                </Col>
            </Row>
        </>
     );
}
 
export default Cabecalho;