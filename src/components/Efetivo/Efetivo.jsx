import React from "react";


import AddPolicial from "./AddPolicial";
import PolicialList from "./PolicialList";
import NavPage from "../NavPage";
import { Col, Container, Row } from "react-bootstrap";

function Efetivo  ({boletim,setBoletim}){

    return(
        <>
        <Container>
            <Row>
                <Col className="text-center">
                    <h3>Adicionar Efetivo</h3>
                </Col>
            </Row>
        </Container>
        <AddPolicial boletim={boletim} setBoletim={setBoletim}/>
        <Container>
            <Row>
                <Col className="text-center">
                    <h3>Efetivo Empregado</h3>
                </Col>
            </Row>
        </Container>
        <PolicialList policiais={boletim.efetivo} boletim={boletim} setBoletim={setBoletim} />
        <NavPage prev="/material" next="/historico"/>
        </>
    )
}

export default Efetivo