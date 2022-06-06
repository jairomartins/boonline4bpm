import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import MateriaisApreendidos from "./MateriaisApreendidos";
import AddMaterialApreendido from "./AddMaterialApreendido"
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
        </>
    )

}
export default ItensApreendidos