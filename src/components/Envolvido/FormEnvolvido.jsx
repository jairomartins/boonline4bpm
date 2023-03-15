import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import { Col, Button, Container, Form, Row, ProgressBar, Card} from "react-bootstrap";
import {BsFillPersonPlusFill,BsPersonLinesFill, BsPersonCheckFill} from "react-icons/bs"
import { ImLocation } from "react-icons/im";

import InputMask from 'react-input-mask';

import { BoletimContext } from "../../Context/BoletimContext";

//formulario para inserir e/ou editar um envolvido na ocorrencia
//modoEdicao = true : exibe botao que confirma e edição
//modoEdicao = false : exibe botao que confirma inserção de um envolvido 
function FormEnvolvido ({envolvido, setEnvolvido, modoEdicao, setModoEdicao}){
    
    const {boletim, setBoletim} = useContext(BoletimContext)

    //limpa os campos do  formulário após inserir ou editar um envolvido
    const resetaCampos = ()=>{
        setEnvolvido({
            id:"",
            tipo:"Autor",//Tipo padrao
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
    }


    //inseri um envolvido no array de envolvidos 
    const submitForm = (e)=>{

        e.preventDefault()

       setModoEdicao(false)//configura modo de exibição do botao enviar dados do formularido de envolvidos

        const newEnvolvidos = [...boletim.envolvidos,
                {
                id:uuidV4(),
                tipo:envolvido.tipo,
                nome:envolvido.nome,
                cpf:envolvido.cpf,
                bairro:envolvido.bairro,
                sexo:envolvido.sexo,
                nascimento:envolvido.nascimento,
                endereco: envolvido.endereco,
                numero:envolvido.numero,
                pontoReferencia:envolvido.pontoReferencia,
                municipio:envolvido.municipio,
                telefone:envolvido.telefone,
                nomeMae:envolvido.nomeMae,
                obs:envolvido.obs}
            ]
            setBoletim({...boletim, envolvidos:newEnvolvidos})

        resetaCampos() 
    }

    return(
        <>  
            {/* Container dados pessoais */}
        <Form onSubmit={submitForm}>
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

                            {/* comparar valor do tipo do envovido, se ele for igual ao da opção exibir selecte, senao usar default */}
                            <Col sm={3}>
                                <Form.Label>Tipo de Envolvimento:</Form.Label>
                                <Form.Select size="sm" name="tipoEnvolvido"
                                defaultValue={envolvido.tipo} 
                                onChange={(e)=>{setEnvolvido({...envolvido, tipo:e.target.value})}}>
                                <option selected={envolvido.tipo ==='Autor'} value="Autor" >Autor</option>
                                <option selected={envolvido.tipo ==='Suspeito'} value="Suspeito">Suspeito</option>
                                <option selected={envolvido.tipo ==='Condutor'} value="Condutor">Condutor</option>
                                <option selected={envolvido.tipo ==='Vítima'} value="Vítima">Vítima</option>
                                <option selected={envolvido.tipo ==='Testemunha'} value="Testemunha">Testemunha</option>
                                <option selected={envolvido.tipo ==='Comunicante'} value="Comunicante">Comunicante</option>
                                <option selected={envolvido.tipo ==='Vítima Fatal'} value="Vítima Fatal">Vítima Fatal</option>
                                <option selected={envolvido.tipo ==='Outro'} value="Outro">Outro</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control 
                                    size="sm"
                                    onChange={(e)=>{setEnvolvido({...envolvido, nome:e.target.value})}}
                                    placeholder="Nome"
                                    required
                                    value={envolvido.nome}
                                />
                            </Col >
                            <Col sm={3}>
                                <Form.Label>Gênero:</Form.Label>
                                    <Form.Select
                                        defaultValue={envolvido.sexo}
                                        onChange={(e)=>{setEnvolvido({...envolvido, sexo:e.target.value})}}
                                        size="sm">
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Outro">Outro</option>
                                        <option value="Prefiro não dizer">Prefiro não dizer</option>
                                    </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Label>CPF:</Form.Label>
                                <InputMask 
                                    className="form-control form-control-sm"
                                    mask="999.999.999-99"
                                    onChange={(e)=>{setEnvolvido({...envolvido, cpf:e.target.value})}}
                                    placeholder="CPF"
                                    value={envolvido.cpf}
                                />
                            </Col>
                            
                            <Col sm={6}>
                                <Form.Label>Data de Nascimento:</Form.Label>
                                <InputMask 
                                    className="form-control form-control-sm"
                                    mask="99/99/9999"
                                    onChange={(e)=>{setEnvolvido({...envolvido, nascimento:e.target.value})}}
                                    placeholder="data de nascimento"
                                    value={envolvido.nascimento}
                                />
                            </Col>
                            <Col sm={3}>
                            <Form.Label>Contato:</Form.Label>
                            <InputMask 
                                className="form-control form-control-sm"
                                mask="(99) 9 9999-9999"
                                onChange={(e)=>{setEnvolvido({...envolvido, telefone:e.target.value})}}
                                placeholder="(99) 9 0000-0000"
                                value={envolvido.telefone}
                            />
                            </Col>
                        </Row>
                        <Row>
                        <Col sm={6}>
                            <Form.Label>Nome da Mãe:</Form.Label>
                            <Form.Control size="sm"
                                type="text"
                                onChange={(e)=>{setEnvolvido({...envolvido, nomeMae:e.target.value})}}
                                placeholder="Nome da Mãe"
                                value={envolvido.nomeMae}
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Label>Observações:</Form.Label>
                            <Form.Control size="sm"
                                type="text"
                                onChange={(e)=>{setEnvolvido({...envolvido, obs:e.target.value})}}
                                placeholder="Observações"
                                value={envolvido.obs}
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
                            value={envolvido.endereco}
                            onChange={(e)=>{setEnvolvido({...envolvido, endereco:e.target.value})}}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Numero : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Numero"
                            value={envolvido.numero}
                            onChange={(e)=>{setEnvolvido({...envolvido, numero:e.target.value})}}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label>Bairro : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Nome do Bairro"
                            value={envolvido.bairro}
                            onChange={(e)=>{setEnvolvido({...envolvido, bairro:e.target.value})}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <Form.Label>Município : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Nome do Município"
                            value={envolvido.municipio}
                            onChange={(e)=>{setEnvolvido({...envolvido, municipio:e.target.value})}}/>
                        </Col>

                        <Col>
                            <Form.Label>Ponto de Referencia : </Form.Label>
                            <Form.Control
                            size="sm"
                            placeholder="Pronto de referencia"
                            value={envolvido.pontoReferencia}
                            onChange={(e)=>{setEnvolvido({...envolvido, pontoReferencia:e.target.value})}}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="text-center">
                        <Col>
                            {!modoEdicao ?<Button // se estiver no modo edicao exibe  botao de finalizar edição, senao exibe botao e adicionar novo envolvido: modoEdição = false - default value
                                variant="success"
                                type="submit"
                            >
                                Adicionar Envolvido  <BsFillPersonPlusFill/> 
                            </Button>
                            :
                            <Button 
                                variant="warning"
                                type="submit"
                            >
                                Finalizar edição  <BsPersonCheckFill/> 
                            </Button>
                            }
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Container>
            <br/>
            <br/>
        </Form>
        </>
    )
}

export default FormEnvolvido