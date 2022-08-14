import React from "react";

import MaterialList from "./MaterialList";
import AddMaterial from "./AddMaterial"
import NavPage from "../NavPage"


import { Container, Row, Col } from "react-bootstrap";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function ItensApreendidos ({boletim,setBoletim}){
    
    return(
        <>
            <CabecalhoBoletim texto={"Materiais Apreendidos"}/>

            <AddMaterial boletim={boletim} setBoletim={setBoletim}/>

            <Container>
                <Row>
                    <Col className="text-center mt-4 mb-4">
                        <h5>Lista de Materiais </h5>
                    </Col>
                </Row>
            </Container>

            <MaterialList 
                boletim={boletim} setBoletim={setBoletim}/>
            <NavPage prev="/envolvido" next="/efetivo"/>
        </>
    )

}
export default ItensApreendidos