import React from "react";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import NavPage from "../NavPage";

import FormEnvolvido from "./FormEnvolvido";
import EnvolvidoList from "./EnvolvidoList";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function Envolvidos (){

    // true  = formulario de envolvido exibe botao de atualizar o cadastro
    // false = formulario de envolvido exibe botao de adicionar o cadastro
    const [modoEdicao, setModoEdicao] = useState(false)


    //Envolvido manipulado no formulário
    //dados dos envolvidos na ocorrencia, os dados previsto para o preencimento de envolvidos na ocorrencia
    const [envolvido, setEnvolvido] = useState(
        {
        //id gerado automaticamente import { v4 as uuidv4 } from 'uuid';
        id: uuidv4(),
        tipo:"Autor",//Tipo padrao
        nome:"",
        cpf:"",
        bairro:"",
        sexo:"masculino",//Sexo padrao
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
            <FormEnvolvido  envolvido={envolvido} setEnvolvido={setEnvolvido} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>
            {/* exibe a lista dos evolvidos ja adicionado na relação de envolvidos, alem de botoes para editar/excluir */}
            <EnvolvidoList envolvido={envolvido} setEnvolvido={setEnvolvido} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>
            <NavPage prev="../header" next="../material"/>
        </>
    )
}

export default Envolvidos