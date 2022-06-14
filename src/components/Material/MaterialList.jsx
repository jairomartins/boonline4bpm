import React from "react";

import { Container, Table } from "react-bootstrap";
import Material from "./Material";


function MaterialList ({boletim, setBoletim}){

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
                {boletim.materiaisApreendidos.map(item=> <Material key={item.id} materialApreendido={item} boletim={boletim} setBoletim={setBoletim}/>)}
            </tbody>
            </Table>
        </Container>
        </>
    )

}
export default MaterialList