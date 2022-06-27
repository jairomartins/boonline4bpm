import React, { useState } from "react";

import { v4 as uuidV4 } from "uuid";

import { Col, Button, Container, Form, Row, ProgressBar} from "react-bootstrap";
import {BsFillPersonPlusFill} from "react-icons/bs"

import InputMask from 'react-input-mask';


function AddEnvolvido ({boletim, setBoletim}){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo , setSexo]  = useState('Masculino')
    const [nascimento, setNascimento]  = useState('')
    const [endereco, setEndereco] = useState('')
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
            municipio:municipio,
            telefone:telefone,
            nomeMae:nomeMae,
            obs:obs}
        ]
        setBoletim({...boletim, envolvidos:newEnvolvidos})
    }
    return(
        <>  <br/>
            
            {/* Container dados pessoais */}
            <Container>
            
            <ProgressBar variant="success" striped now={40} />
            
            <hr/>
                <Row>
                    <Col sm={3}>
                        <Form.Label>Tipo Envolvimento:</Form.Label>
                        <Form.Select size="sm" name="tipoEnvolvido"
                        defaultValue={tipoEnvolvido} 
                        onChange={(e)=>{setTipoEnvolvido(e.target.value)}}>
                        <option value="Autor" >Autor</option>
                        <option value="Suspeito">Suspeito</option>
                        <option value="Vitima">Vítima</option>
                        <option value="Testemunha">Tetemunha</option>
                        <option value="Comunicante">Comunicante</option>
                        <option value="Vítima Fatal">Vítima Fatal</option>
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control size="sm"
                            onChange={(e)=>{setNome(e.target.value)}}
                            placeholder="Nome"
                            value={nome}
                        />
                    </Col >
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
                    <Col sm={4}>
                        <Form.Label>CPF:</Form.Label>
                        <InputMask 
                            className="form-control form-control-sm"
                            mask="999.999.999-99"
                            onChange={(e)=>{setCpf(e.target.value)}}
                            placeholder="CPF"
                            value={cpf}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Sexo:</Form.Label>
                            <Form.Select
                                defaultValue={sexo}
                                onChange={(e)=>{setSexo(e.target.value)}}
                                size="sm">
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </Form.Select>
                        </Col>
                    <Col sm={4}>
                        <Form.Label>Data de Nascimento:</Form.Label>
                        <InputMask 
                            className="form-control form-control-sm"
                            mask="99/99/9999"
                            onChange={(e)=>{setNascimento(e.target.value)}}
                            placeholder="data de nascimento"
                            value={nascimento}
                        />
                    </Col>
                </Row>
            </Container>
            
            {/* Container dados de Localizacao */}
            <Container>
                <Row>
                <Col sm={4}>
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control size="sm"
                        type="text"
                        onChange={(e)=>{setEndereco(e.target.value)}}
                        placeholder="Nome da Rua -  Número"
                        value={endereco}
                    />
                </Col>
                <Col sm={4}>
                    <Form.Label>Bairro:</Form.Label>
                    <Form.Control size="sm"
                        type="text"
                        onChange={(e)=>{setBairro(e.target.value)}}
                        placeholder="Nome do Bairro"
                        value={bairro}
                    />
                </Col>
                <Col sm={4}>
                    <Form.Label>Município:</Form.Label>
                    <Form.Control size="sm"
                        type="text"
                        onChange={(e)=>{setMunicipio(e.target.value)}}
                        placeholder="Nome do Município"
                        value={municipio}
                    />
                </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Form.Label>Nome da Mãe:</Form.Label>
                        <Form.Control size="sm"
                            type="text"
                            onChange={(e)=>{setNomeMae(e.target.value)}}
                            placeholder="Nome da Mãe"
                            value={nomeMae}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Observação</Form.Label>
                        <Form.Control size="sm"
                            type="text"
                            onChange={(e)=>{setObs(e.target.value)}}
                            placeholder=""
                            value={obs}
                        />
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
            </Container>
            <br/>
            <br/>
        </>
    )
}

export default AddEnvolvido