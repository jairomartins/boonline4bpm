import React from "react";


import AddPolicial from "./AddPolicial";
import PolicialList from "./PolicialList";
import NavPage from "../NavPage";
import { Col, Container, Row } from "react-bootstrap";

import Cabecalho from "../Cabecalho/Cabecalho";

function Efetivo  ({boletim,setBoletim}){

    return(
        <>
        <Cabecalho texto={"Adicionar Efetivo"}/>
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