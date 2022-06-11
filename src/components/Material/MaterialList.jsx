import React from "react";

import { Container, Table } from "react-bootstrap";
import Material from "./Material";


function MaterialList ({materiaisApreendidos, handleMaterialApreendidoRemove}){

    return(
        <>
        <Container>
           <br></br>
            <Table size="sm">
            <thead>
                <tr>
                <th >Descrição</th>
                <th >Quantidade</th>
                <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                {materiaisApreendidos.map(item=> <Material materialApreendido={item} handleMaterialApreendidoRemove={handleMaterialApreendidoRemove}/>)}
            </tbody>
            </Table>
        </Container>
        </>
    )

}
export default MaterialList