import React, { useState } from "react";

import { v4 as uuidV4 } from "uuid";

import { Col, Button, Container, Form, Row, ProgressBar, Card} from "react-bootstrap";
import {BsFillPersonPlusFill,BsPersonLinesFill} from "react-icons/bs"
import { ImLocation } from "react-icons/im";

import InputMask from 'react-input-mask';


function AddEnvolvido ({boletim, setBoletim}){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo , setSexo]  = useState('Masculino')
    const [nascimento, setNascimento]  = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [pontoReferencia, setPontoReferencia] = useState('')
    const [bairro, setBairro] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nomeMae, setNomeMae] = useState('')
    const [obs, setObs] = useState('')

    const clickAddEnvolvido = ()=>{
    const newEnvolvidos = [...boletim.envolvidos,
            {
            id:uuidV4(),
            tipo:tipoEnvolvido,
            nome:nome,
            cpf:cpf,
            bairro:bairro,
            sexo:sexo,
            nascimento:nascimento,
            endereco: endereco,
            numero:numero,
            pontoReferencia:pontoReferencia,
            municipio:municipio,
            telefone:telefone,
            nomeMae:nomeMae,
            obs:obs}
        ]
        setBoletim({...boletim, envolvidos:newEnvolvidos})
    }
    return(
        <>  
            {/* Container dados pessoais */}
            <Container fluid>
            <br/>
            <ProgressBar variant="success" striped now={40} />
            <hr/>

                <Card>
                    <Card.Header>
                        <Card.Title>
                            <BsPersonLinesFill/> Dados Pessoais
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={3}>
                                <Form.Label>Tipo de Envolvimento:</Form.Label>
                                <Form.Select size="sm" name="tipoEnvolvido"
                                defaultValue={tipoEnvolvido} 
                                onChange={(e)=>{setTipoEnvolvido(e.target.value)}}>
                                <option value="Autor" >Autor</option>
                                <option value="Suspeito">Suspeito</option>
                                <option value="Condutor">Condutor</option>
                                <option value="Vitima">Vítima</option>
                                <option value="Testemunha">Tetemunha</option>
                                <option value="Comunicante">Comunicante</option>
                                <option value="Vítima Fatal">Vítima Fatal</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control 
                                    size="sm"
                                    onChange={(e)=>{setNome(e.target.value)}}
                                    placeholder="Nome"
                                    value={nome}
                                />
                            </Col >
                            <Col sm={3}>
                                <Form.Label>Sexo:</Form.Label>
                                    <Form.Select
                                        defaultValue={sexo}
                                        onChange={(e)=>{setSexo(e.target.value)}}
                                        size="sm">
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Label>CPF:</Form.Label>
                                <InputMask 
                                    className="form-control form-control-sm"
                                    mask="999.999.999-99"
                                    onChange={(e)=>{setCpf(e.target.value)}}
                                    placeholder="CPF"
                                    value={cpf}
                                />
                            </Col>
                            
                            <Col sm={6}>
                                <Form.Label>Data de Nascimento:</Form.Label>
                                <InputMask 
                                    className="form-control form-control-sm"
                                    mask="99/99/9999"
                                    onChange={(e)=>{setNascimento(e.target.value)}}
                                    placeholder="data de nascimento"
                                    value={nascimento}
                                />
                            </Col>
                            <Col sm={3}>
                            <Form.Label>Contato:</Form.Label>
                            <InputMask 
                                className="form-control form-control-sm"
                                mask="(99) 9 9999-9999"
                                onChange={(e)=>{setTelefone(e.target.value)}}
                                placeholder="(99) 9 0000-0000"
                                value={telefone}
                            />
                            </Col>
                        </Row>
                        <Row>
                        <Col sm={6}>
                            <Form.Label>Nome da Mãe:</Form.Label>
                            <Form.Control size="sm"
                                type="text"
                                onChange={(e)=>{setNomeMae(e.target.value)}}
                                placeholder="Nome da Mãe"
                                value={nomeMae}
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Label>OBS:</Form.Label>
                            <Form.Control size="sm"
                                type="text"
                                onChange={(e)=>{setObs(e.target.value)}}
                                placeholder="Observações"
                                value={obs}
                            />
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            <br/>

            {/* Container dados de Localizacao */}
            <Container fluid>
                <Card>
                    <Card.Header>
                        <Card.Title><ImLocation/> Endereço</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                        <Col sm={8}>
                            <Form.Label>Endereço : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Nome da Rua"
                           
                            onChange={(e)=>{setEndereco(e.target.value)}}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Numero : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Numero"
                            value={numero}
                            onChange={(e)=>{setNumero(e.target.value)}}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Bairro : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Nome do Bairro"
                            onChange={(e)=>{setBairro(e.target.value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <Form.Label>Município : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Nome do Município"
                            defaultValue={boletim.municipio}
                            onChange={(e)=>{setMunicipio(e.target.value)}}/>
                        </Col>

                        <Col>
                            <Form.Label>Ponto de Referencia : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Pronto de referencia"
                            
                            onChange={(e)=>{setPontoReferencia(e.target.value)}}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="text-center">
                        <Col>
                            <Button 
                                variant="success"
                                onClick={clickAddEnvolvido}
                            >
                                Adicionar Envolvido  <BsFillPersonPlusFill/> 
                            </Button>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Container>
            <br/>
            <br/>
        </>
    )
}

export default AddEnvolvido