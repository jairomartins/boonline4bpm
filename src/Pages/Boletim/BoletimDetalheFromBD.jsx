import React,{useState, useEffect} from "react";
import { Col, Row, Container, Button, Table} from "react-bootstrap";

import axios from "axios"

import {Editor,EditorState} from "draft-js"
import 'draft-js/dist/Draft.css';

import {stateFromHTML} from 'draft-js-import-html';


import { AiFillPrinter } from "react-icons/ai";
import {BsArrowLeft } from "react-icons/bs"

// import BandeiraMaranhao from "../BandeiraMaranhao";
import Logo4BPM from "../../components/Logo4BPM"
// import BrasaoMa from "../Brasao_Maranhao"
import LogoPMMA from "../../components/Logo_PMMA";

// import MaterialDetalhe from "../../components/BoletimDetalhe/MaterialDetalhe";
// import PolicialDetalhe from "../../components/BoletimDetalhe/PolicialDetalhe";
// import EnvolvidosDetalhe from "../../components/BoletimDetalhe/EnvolvidosDetalhe";

import { Link } from "react-router-dom";

const BoletimDetalheFromBD = () => {

    const [boletim, setBoletim] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.0.100:3001/listaByID')
        .then(function (response) {
            setBoletim(response.data[0])
            setEditorState(EditorState.createWithContent(stateFromHTML(boletim.historicohtml)));
        })
    }, [boletim]);

    // useEffect(() => {
    //     const state = boletim.historicohtml
    //       ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
    //       : EditorState.createEmpty();
    //     setEditorState(state);
    //   }, [boletim.historicohtml]);

    const [editorState, setEditorState] = useState(()=>EditorState.createWithContent(stateFromHTML(boletim.historicohtml)))

   return ( <>
        <Container  style={{fontSize:"12px"}}>
            <br></br>
            <Row   className="text-center">
                <Col>
                    <LogoPMMA/>
                </Col>
                <Col style={{fontSize:"10px"}}>
                    {/* <BrasaoMa/> */}
                    <b><p>ESTADO DO MARANHÃO <br/>
                    SECRETARIA DE ESTADO DA SEGURANÇA PÚBLICA<br/>
                    POLÍCIA MILITAR DO MARANHÃO<br/>
                    COMANDO DO POLICIAMENTO DE ÁREA DO INTERIOR – CPAI-6<br/>
                    4º BATALHÃO DE POLÍCIA MILITAR
                    </p></b>
                </Col>
                <Col>
                    <Logo4BPM/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">OCORRÊNCIA NUMERO:<b> {boletim.numero} {boletim.dataRegistro}</b></Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center"><h6>FATO COMUNICADO<Link className="d-print-none" to="/header">Editar</Link></h6></Col>
                
            </Row>
            <br/>
            <Row>
                <Col>
                    <b>Natureza da Ocorrência: </b> {boletim.natureza} 
                </Col>
                <Col>
                    <b>Data: </b>{boletim.data} 
                </Col>
                <Col>
                <b>Horário: </b>{boletim.horario}  
                </Col>
            </Row>
            <Row>
                <Col>Local: {boletim.endereco}, {boletim.numeroEndereco}  </Col>
                <Col>Bairro: {boletim.bairro}</Col>
                <Col>Municipio: {boletim.municipio}</Col>
            </Row>
            <Row>
                <Col >Ponto de Refêrencia : {boletim.referencia}</Col>
                
                <Col>Coordenadas: {boletim.latitude}, {boletim.longitude}</Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row>
            
                <Col className="text-center"><h6>ENVOLVIDO(S)<Link className="d-print-none" to="/envolvido">Editar</Link></h6></Col>
                
            </Row>

            {/* {boletim.envolvidos.map(envolvido=><EnvolvidosDetalhe key={envolvido.id} envolvido={envolvido}/>)} */}
           
            
            <hr/>
        </Container>
    
        <Container style={{fontSize:"12px"}}>
            {/**faz a quebra de pagina na impressao */}
            {/* <Row style={{pageBreakBefore:"always"}}>
            </Row>  */}

            <Row>
                <Col className="text-center"><h6>ARMAS E OBJETOS APREENDIDOS<Link className="d-print-none" to="/material">Editar</Link></h6></Col>
            </Row>
           
                {/* {boletim.materiaisApreendidos.map(material=><MaterialDetalhe key={material.id} material={material}/>)} */}
                   

            <hr/>

            <Row>
                <Col className="text-center"><h6>HISTÓRICO <Link className="d-print-none" to="/historico">Editar</Link></h6></Col>
            </Row>

            <Row>
                <Editor editorState={editorState} onChange={setEditorState} readOnly={true}/>
              
            </Row>
            <hr/>

            <Row>
                <Col className="text-center"><h6>EFETIVO EMPREGADO</h6></Col>
            </Row>
            <Row>

            {/* {boletim.efetivo.map(policial=><PolicialDetalhe key={policial.id} policial={policial}/>)} */}
                 
            </Row>
            <hr/>
            <Row>
                <Col className="text-center"><h6>UNIDADE DE ENTREGA</h6></Col>
            </Row>
            <Table borderless>
                <tr>
                    <td>Unidade ___________________________</td>
                    <td>Data  _______/________/_______</td>
                    <td>Hora       _________:_________</td>
                </tr>
                <tr>
                    <td>Matricula ___________________________</td>
                    <td>Nome ______________________________</td>
                    <td>Assinatura ___________________________</td>
                </tr>
            </Table>

            <Row className="text-center">
                <Col>
                    <Button
                        className="d-print-none"
                        size="sm"  
                        variant="outline-primary">
                        <Link 
                            className="text-decoration-none" 
                            to="/historico">
                                <BsArrowLeft/> Voltar
                        </Link>
                    </Button>
               </Col>
                <Col className="text-center">
                    {/* d-print-none exclui o botao do pdf*/}
                    <Button 
                        size="sm"
                        variant="success" 
                        className="d-print-none"
                        onClick={()=>{document.title = "BO_"+boletim.numero+"_"+boletim.data;window.print()}}>
                            Imprimir <AiFillPrinter/>
                    </Button>
                </Col>
            </Row>
            <br/>
        </Container>
    
    </> );
}
 
export default BoletimDetalheFromBD