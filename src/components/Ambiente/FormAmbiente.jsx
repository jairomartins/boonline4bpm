import React from "react";
import { Card, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import { GrDocumentTime } from "react-icons/gr";

export default function FormAmbiente(){

    const instituicoesFinanceiras  = ['Agência Bancária', 'Caixa Eletrônico', 'Posto de Atendimento', 'Casa de Câmbio', 'Trânsporte de Valor', 'Casa Lotérica'];
    const instituicoesEnsino =['Federal', 'Estadual','Municipal', 'Particular'];
    const instituicoesSaude = ['Clínica', 'Consultório', 'Farmácia', 'Hospital', 'Posto de Saúde'];
    const postoDeCombustivel = ['Com Loja de Conveniência', 'Sem Loja de Conveniência'];
    const associacoes = ['Clube Desportivos', 'Clube Social','Conselhos','De Bairros', 'Filantrpica', 'Política', 'Sindicato', 'Cooperativa','Religiosa (igreja/Templo)'];
    const transportes =['Aeroporto', 'Porto', 'Terminal Urbano'];


    const horariosFuncionmento = ['Diurno', 'Noturno', 'Diurno/Noturno', '24 Horas'];
    const eventos = ['Competição Desportiva', 'Competição Motorizada', 'Beneficiente', 'Comício','Exposição Feira', 'Futebol', 'Festa','Greve','Invasão','Leilão', 'Oasseata/Manifestação','Religioso','Rodeio','Show'];
    const circulacaoDeVeiculos = ['Pouco', 'Normal','Intensa'];
    const circulacaoDePessoas = ['Pouca', 'Normal','Intensa'];
    const iluminacaoArtificial = ['Não', 'Sim - Pouca Visibilidade','Sim - Boa Visibilidade'];
    const desordens = ['Pichação','Lixo nas Ruas', 'Terrenos Baldios','Má Conservação das Vias','Construções Ilegais','Ambulantes Ilegais','Utilização Irregular de Espaço Publico','Consumo de Bebida Alcoolicas'];
    return(
        <>

            <Container fluid> 
                <br/>
                <ProgressBar variant="success" striped now={20} />
                <hr/>
                <Form>
                    <Row className="well">
                        <Card>
                            <Card.Header>
                                <Card.Title><GrDocumentTime/> Ambiente - Estabelecimento </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={4}>
                                    
                                    <Form.Check
                                        inline
                                        label="Interior do Ambiente"
                                        name="AreaAmbiente"
                                        value="Interior"
                                        type='radio'
                                    />
                                    <Form.Check
                                        inline
                                        label="Via Pública"
                                        name="AreaAmbiente"
                                        value="ViaPublica"
                                        type='radio'
                                    />

                                </Col>
                            </Card.Body>
                        </Card>    
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Atividade Financeira </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                    <Form.Select>
                                        <option>-- Selecione --</option>
                                        {instituicoesFinanceiras.map((ifin)=>(
                                            <option>{ifin}</option>
                                        ))}
                                    </Form.Select>
                                
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Instituição de Ensino </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                    <Form.Select>
                                        <option>-- Selecione --</option>
                                        {instituicoesEnsino.map((iEnsino)=>(
                                            <option>{iEnsino}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Instituição de Saúde </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                <Form.Select>
                                        <option>-- Selecione --</option>
                                        {instituicoesSaude.map((iSaude)=>(
                                            <option>{iSaude}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Posto de Combustível </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                    <Form.Select>
                                        <option>-- Selecione --</option>
                                        {postoDeCombustivel.map((postoComb)=>(
                                            <option>{postoComb}</option>
                                        ))}
                                    </Form.Select>
                                
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Associações </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                    <Form.Select>
                                        <option>-- Selecione --</option>
                                        {associacoes.map((iassociacao)=>(
                                            <option>{iassociacao}</option>
                                        ))}
                                    </Form.Select>
                                
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Transportes  </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                    <Form.Select>
                                        <option>-- Selecione --</option>
                                        {transportes.map((iTransporte)=>(
                                            <option>{iTransporte}</option>
                                        ))}
                                    </Form.Select>
                                
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Horário de Funcionamento </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {horariosFuncionmento.map((horf)=>(
                                    <Form.Check 
                                    inline
                                    label={horf}
                                    name="horaAmbiente"
                                    type='radio'
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Eventos </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {eventos.map((evento)=>(
                                    <Form.Check 
                                    inline
                                    label={evento}
                                    name="eventoAmbiente"
                                    type='radio'
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Circulação de Veículos </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {circulacaoDeVeiculos.map((circoVei)=>(
                                    <Form.Check 
                                    inline
                                    label={circoVei}
                                    name="circoVei"
                                    type='radio'
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Circulacao De Pessoas </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {circulacaoDePessoas.map((circpessoa)=>(
                                    <Form.Check 
                                    inline
                                    label={circpessoa}
                                    name="circpessoa"
                                    type='radio'
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>
                    
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Iluminação Artificial </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {iluminacaoArtificial.map((iluminacao)=>(
                                    <Form.Check 
                                    inline
                                    label={iluminacao}
                                    name="iluminacao"
                                    type='radio'
                                    value={iluminacao}
                                    onChange={(e)=>{console.log(e.target.value)}}
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>
                    <Row>
                        <Card>
                            <Card.Header>
                                <Card.Title>Desordem</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col sm={6}>
                                {desordens.map((desordem)=>(
                                    <Form.Check 
                                    inline
                                    label={desordem}
                                    name="desordem"
                                    type='checkbox'
                                />
                                ))}
                                </Col>
                            </Card.Body>
                        </Card>  
                    </Row>

                    
                </Form>
            </Container>
        </>
    )
}