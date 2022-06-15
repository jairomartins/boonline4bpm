import React from "react"

import { Col, Row } from "react-bootstrap";

const EnvolvidosDetalhe = ({envolvido}) => {
    return (<>
            <Row>
                 <Col>Envolvimento : {envolvido.tipo}</Col>
                 <Col>Nome : {envolvido.nome} </Col>
                 <Col>CPF : {envolvido.cpf}</Col>
             </Row>
             <Row>
                 <Col>Sexo: {envolvido.sex0} </Col>	
                 <Col>Data de nascimento: {envolvido.nascimento}</Col>
                 <Col>Telefone : {envolvido.telefone}</Col>
             </Row>
             <Row>
                 <Col>Endereço: {envolvido.endereco}</Col>
                 <Col>Bairro: {envolvido.bairro} </Col>
                 <Col>Município: {envolvido.municipio} </Col>	
             </Row>
             <Row>
                 <Col>Nome da Mãe: {envolvido.nomeMae}</Col>	
             </Row>
             <Row>
                 <Col>OBS: {envolvido.obs}</Col>	
             </Row>
             <br/>
    </>  );
}
 
export default EnvolvidosDetalhe;