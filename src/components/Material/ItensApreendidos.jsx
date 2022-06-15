import React from "react";

import MaterialList from "./MaterialList";
import AddMaterial from "./AddMaterial"
import NavPage from "../NavPage"


import { Container, Col } from "react-bootstrap";
import Cabecalho from "../Cabecalho/Cabecalho";

function ItensApreendidos ({boletim,setBoletim}){
    
    return(
        <>
            <Cabecalho texto={"Materiais Apreendidos"}/>
            <AddMaterial boletim={boletim} setBoletim={setBoletim}/>

            <Container>
                <Col className="text-center mt-4 mb-4">
                    <h5>Lista de Materiais </h5>
                </Col>
            </Container>


            <MaterialList 
                boletim={boletim} setBoletim={setBoletim}/>
            <NavPage prev="/envolvido" next="/efetivo"/>
        </>
    )

}
export default ItensApreendidos