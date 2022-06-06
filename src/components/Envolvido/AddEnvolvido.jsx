import React, { useState } from "react";

import { Col, Button, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdAdd} from "react-icons/md"




function AddEnvolvido ({handleAddEnvolvido}){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [rg, setRg] = useState('')
    const [sexo, setSexo] = useState('Masculino')
    const [nascimento, setNascimento] = useState('')
    const [endereco, setEndereco] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nomeMae, setNomeMae] = useState('')
    const [obs, setObs] = useState('')

    const handleClickAdd = ()=>{
        handleAddEnvolvido({tipoEnvolvido, nome, cpf, rg, sexo, nascimento, endereco, municipio, telefone, nomeMae, obs})
        alert("adicionou" + tipoEnvolvido)
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
                        onChange={(e)=>{setTipoEnvolvido(e.target.value);console.log(e.target.value)}}>
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
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setCPF(e.target.value)}}
                        placeholder="CPF"
                        value={cpf}
                    />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                        <Form.Label>RG:</Form.Label>
                        <Form.Control size="sm"
                            onChange={(e)=>{setRg(e.target.value)}}
                            placeholder="RG"
                            value={rg}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>Sexo:</Form.Label>
                        <Form.Select size="sm" aria-label="Default select example"
                            defaultValue={sexo}
                            onChange={(e)=>{setSexo(e.target.value); console.log(e.target.value)}}
                        >
        
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        </Form.Select>
                    </Col>
                    <Col sm={4}>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setNascimento(e.target.value)}}
                        type="date"
                        placeholder="Nascimento"
                        value={nascimento}
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setEndereco(e.target.value)}}
                        placeholder="Endereço"
                        value={endereco}
                    />
                    </Col >
                    <Col sm={4}>
                    <Form.Label>Municipio:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setMunicipio(e.target.value)}}
                        placeholder="Municipio"
                        value={municipio}
                    />
                    </Col>
                    <Col sm={4}>
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setTelefone(e.target.value)}}
                        placeholder="Telefone"
                        value={telefone}
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={8}>
                    <Form.Label>Nome da Mãe:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setNomeMae(e.target.value)}}
                        placeholder="Nome da Mãe"
                        value={nomeMae}
                    />
                    </Col>
                    <Col sm={4}>
                    <Form.Label>O.B.S:</Form.Label>
                    <Form.Control size="sm"
                        onChange={(e)=>{setObs(e.target.value)}}
                        placeholder="Observações"
                        value={obs}
                    />
                    </Col >
                </Row>
                <br></br>
                <Link to="" >
                   <Button 
                        variant="primary"
                        onClick={handleClickAdd}
                        >
                        Adicionar
                        <MdAdd/>
                    </Button>
                </Link>
                 
            </Container>
        </>
    )
}

export default AddEnvolvido