import React from "react"

import { Col, Row } from "react-bootstrap";

const EnvolvidosDetalhe = ({envolvido}) => {
    return (<>
            <Row>
                <Col><b>Tipo de Envolvimento: </b> {envolvido.tipo}</Col>
                <Col><b>Nome : </b> {envolvido.nome} </Col>
                <Col><b>CPF : </b>{envolvido.cpf}</Col>
            </Row>
            <Row>
                <Col><b>Sexo: </b>{envolvido.sex0} </Col>	
                <Col><b>Data de nascimento: </b>{envolvido.nascimento}</Col>
                <Col><b>Telefone : </b>{envolvido.telefone}</Col>
            </Row>
            <Row>
                <Col><b>Nome da Mãe: </b>{envolvido.nomeMae}</Col>	
                <Col><b>Observações: </b>{envolvido.obs}</Col>
                <Col><b>Ponto de Referência: </b>{envolvido.pontoReferencia}</Col>	
            </Row>	
             <Row>
                <Col><b>Endereço: </b>{envolvido.endereco}, Número: {envolvido.numero} </Col>
                <Col><b>Bairro: </b>{envolvido.bairro} </Col>
                <Col><b>Município: </b>{envolvido.municipio} </Col>
            </Row>
            <br/>
    </>  )
}
 
export default EnvolvidosDetalhe;