import React, { useState } from "react";

import { Col, Container, FormControl,FormSelect, Row } from "react-bootstrap";




function Envolvido (){

    const [tipoEnvolvido, setTipoEnvolvido] = useState('Autor')
    const [nome, setNome] = useState('')

    const handleChange = (e) => {
        setTipoEnvolvido(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeNome=(e)=>{
        setNome(e.target.value)
        console.log(e.target.value)
    }

    return(

        
        <>  
            <Container>
                <Row className="justify-content-center">
                <h2>Envolvido</h2>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={3}>
                        <FormSelect size="sm" name="tipoEnvolvido" onChange={handleChange}>
                        <option selected value={tipoEnvolvido}>Autor</option>
                        <option value="Suspeito">Suspeito</option>
                        <option value="Vitima">Vítima</option>
                        <option value="Testemunha">Tetemunha</option>
                        <option value="Comunicante">Comunicante</option>
                        <option value="Vítima Fatal">Vítima Fatal</option>
                        </FormSelect>
                    </Col>
                    <Col sm={6}>
                    <FormControl size="sm" onChange={handleChangeNome}
                    placeholder="Nome"
                    value={nome}
                    />
                    </Col >
                    <Col sm={3}>
                    <FormControl size="sm"
                    placeholder="CPF"
                    aria-label="Username"
                    />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                        <FormControl size="sm"
                        placeholder="RG"
                        aria-label="Username"
                        />
                    </Col>
                    <Col sm={4}>
                        <FormSelect size="sm" aria-label="Default select example">
                        <option>Selecione o Sexo</option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                        </FormSelect>
                    </Col>
                    <Col sm={4}>
                    <FormControl size="sm"
                    type="date"
                    placeholder="Nascimento"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                    <FormControl size="sm"
                    placeholder="Endereço"
                    aria-label="Username"
                    />
                    </Col >
                    <Col sm={4}>
                    <FormControl size="sm"
                    placeholder="Municipio"
                    aria-label="Username"
                    />
                    </Col>
                    <Col sm={4}>
                    <FormControl size="sm"
                    placeholder="Telefone"
                    aria-label="Username"
                    />
                    </Col >
                </Row>
                <br/>
                <Row>
                    <Col sm={8}>
                    <FormControl size="sm"
                    placeholder="Nome da Mãe"
                    aria-label="Username"
                    />
                    </Col>
                    <Col sm={4}>
                    <FormControl size="sm"
                    placeholder="Observações"
                    aria-label="Username"
                    />
                    </Col >
                </Row>   
            </Container>
        </>
    )
}

export default Envolvido