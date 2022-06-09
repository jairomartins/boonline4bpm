import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import MateriaisApreendidos from "./MateriaisApreendidos";
import AddMaterialApreendido from "./AddMaterialApreendido"
import { Button, Container, Row } from "react-bootstrap";
function ItensApreendidos ({materialApreendido}){
    
    const  [materiaisApreendido, setMateriaisApreendido] = useState([
        {
            id:uuidv4(),
            descricao:"Arma de Fogo de Fabricação Caseira",
            quantidade:1
        },
        {
            id:102,
            descricao:"Arma de Fogo de Fabricação Caseira 2",
            quantidade:1
        },
        {
            id:103,
            descricao:"Arma de Fogo de Fabricação Caseira 3",
            quantidade:1
        },
        {
            id:104,
            descricao:"Substancia Analoga ao Crack",
            quantidade:13
        }
    ])

    const handleAddMaterial = (materialApreendido)=>{

        const novoMaterialApreendido =[
            ...materiaisApreendido,{
                id:uuidv4(),
                descricao:materialApreendido.descricao,
                quantidade:materialApreendido.quantidade
            }
        ]
        setMateriaisApreendido(novoMaterialApreendido)
    }

    const handleMaterialApreendidoRemove = (idmaterial)=>{
        const novoMaterialApreendido = materiaisApreendido.filter((material)=> material.id!==idmaterial)
        setMateriaisApreendido(novoMaterialApreendido)
    }

    return(
        <>
            <AddMaterialApreendido handleAddMaterial={handleAddMaterial} />
            <MateriaisApreendidos 
            materiaisApreendidos={materiaisApreendido}
            handleMaterialApreendidoRemove={handleMaterialApreendidoRemove}
            />

            <Container>
                <Row className="d-grid gap-2">
                        <Button variant="outline-primary"><a href="/envolvido">Voltar</a></Button>
    
                        <Button variant="outline-primary" ><a href="/efetivo">Proximo</a></Button>
                </Row>
            </Container>
        </>
    )

}
export default ItensApreendidos