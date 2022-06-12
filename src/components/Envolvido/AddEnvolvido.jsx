import React, { useState } from "react";

import { v4 as uuidV4 } from "uuid";

import { Col, Button, Container, Form, Row} from "react-bootstrap";
import {MdAdd} from "react-icons/md"




function AddEnvolvido ({boletim, setBoletim}){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo , setSexo]  = useState('')
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
        <>  
            <Container>
                <br></br>
                <Row className="justify-content-center">
                    <h2>Adicionar Envolvido</h2>
                </Row>
                <br></br>
            </Container>
            <Container>
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
                    <Form.Control size="sm"
                        onChange={(e)=>{setTelefone(e.target.value)}}
                        placeholder="(99) 9 0000-0000"
                        value={telefone}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control size="sm"
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
                        <Form.Control size="sm"
                            type="date"
                            onChange={(e)=>{setNascimento(e.target.value)}}
                            placeholder="CPF"
                            value={nascimento}
                        />
                    </Col>
                </Row>
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
                            placeholder="Nome do Município"
                            value={nomeMae}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Nome da Mãe:</Form.Label>
                        <Form.Control size="sm"
                            type="text"
                            onChange={(e)=>{setObs(e.target.value)}}
                            placeholder="Nome do Município"
                            value={obs}
                        />
                    </Col>  
                </Row>
                <br/>
                <Row>
                    <Button 
                        variant="primary"
                        onClick={clickAddEnvolvido}
                        >
                        Adicionar
                        <MdAdd/>
                    </Button>
                </Row>
            </Container>
            <br/>
            <br/>
        </>
    )
}

export default AddEnvolvido