import React from "react";
import { Col, Row } from "react-bootstrap";

import './cabecalho.css'
import "../Logo4BPM.css"

import logo4bpm from "../Logo_4bpm.png"

const Cabecalho = () => {
    return ( 
        <>
            <Row className="container-cabecalho">
                <Col>
                    <h6><b>Boletim Eletronico - 4°BPM</b></h6>
             
                    <img src={logo4bpm} className="Logo-4bpm-cabecalho" alt="Logo do 4°BPM da PMMA" />
                </Col>
                <br/>
            </Row>
            <hr/>
        </>
     );
}
 
export default Cabecalho;