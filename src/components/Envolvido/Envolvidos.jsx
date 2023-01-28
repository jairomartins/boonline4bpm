import React from "react";

import { useState } from "react";


import NavPage from "../NavPage";

import FormEnvolvido from "./FormEnvolvido";
import EnvolvidoList from "./EnvolvidoList";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function Envolvidos ({boletim,setBoletim}){

    // true  = formulario de envolvido exibe botao de atualizar o cadastro
    // false = formulario de envolvido exibe botao de adicionar o cadastro
    const [modoEdicao, setModoEdicao] = useState(false)


    //Envolvido manipulado no formulário
    //dados dos envolvidos na ocorrencia, os dados previsto para o preencimento de envolvidos na ocorrencia
    const [envolvido, setEnvolvido] = useState(
        {
        id:"",
        tipo:"",
        nome:"",
        cpf:"",
        bairro:"",
        sexo:"",
        nascimento:"",
        endereco: "",
        numero:"",
        pontoReferencia:"",
        municipio:"",
        telefone:"",
        nomeMae:"",
        obs:""}
    )

    return (
        <>
            <CabecalhoBoletim texto={"Adicionar Envolvidos "}/>
            {/* exibe formulario para preencher ou editar os dados dos envolvidos */}
            <FormEnvolvido boletim={boletim} setBoletim={setBoletim} envolvido={envolvido} setEnvolvido={setEnvolvido} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>
            {/* exibe a lista dos evolvidos ja adicionado na relação de envolvidos, alem de botoes para editar/excluir */}
            <EnvolvidoList boletim={boletim} setBoletim={setBoletim} envolvido={envolvido} setEnvolvido={setEnvolvido} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>
            <NavPage prev="/header" next="/material"/>
        </>
    )
}

export default Envolvidos