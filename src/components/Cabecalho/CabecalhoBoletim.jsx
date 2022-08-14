import React from "react";
import { Col, Row } from "react-bootstrap";

import './cabecalho.css'
import "../Logo4BPM.css"

const CabecalhoBoletim = ({texto}) => {
    return ( 
        <>
            <Row className="container-cabecalho-boletim">
                <Col>
                    
                    <h4>{texto}</h4>
                    
                </Col>
            </Row>

        </>
     );
}
 
export default CabecalhoBoletim;