import React from "react"

import { Col, Row } from "react-bootstrap";

const EnvolvidosDetalhe = ({envolvido}) => {
    return (<>
            <Row>
                <Col>Tipo de Envolvimento : {envolvido.tipo}</Col>
                <Col>Nome : {envolvido.nome} </Col>
                <Col>CPF : {envolvido.cpf}</Col>
            </Row>
            <Row>
                <Col>Sexo: {envolvido.sex0} </Col>	
                <Col>Data de nascimento: {envolvido.nascimento}</Col>
                <Col>Telefone : {envolvido.telefone}</Col>
            </Row>
            <Row>
                <Col>Nome da Mãe: {envolvido.nomeMae}</Col>	
            </Row>
             <Row>
                 <Col>OBS: {envolvido.obs}</Col>	
             </Row>
             <Row>
                <Col>Endereço: {envolvido.endereco}</Col>
                <Col>Número: {envolvido.numero} </Col>
                <Col>Bairro: {envolvido.bairro} </Col>
                <Col>Município: {envolvido.municipio} </Col>
                <Col>Ponto de Referência: {envolvido.pontoReferencia}</Col>	
            </Row>
             <br/>
    </>  )
}
 
export default EnvolvidosDetalhe;