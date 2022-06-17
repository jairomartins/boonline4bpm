import React,{useState, useEffect} from "react";
import { Col, Row, Container, Button} from "react-bootstrap";

import {Editor,EditorState} from "draft-js"
import 'draft-js/dist/Draft.css';
import { AiFillPrinter } from "react-icons/ai";

import BandeiraMaranhao from "../BandeiraMaranhao";
import EnvolvidosDetalhe from "./EnvolvidosDetalhe";
import LogoPMMA from "../Logo_PMMA";
import MaterialDetalhe from "./MaterialDetalhe";
import PolicialDetalhe from "./PolicialDetalhe";

import { Link } from "react-router-dom";

const BoletimDetalhe = ({boletim}) => {

    useEffect(() => {
        const state = boletim.historico
          ? EditorState.createWithContent(boletim.historico)
          : EditorState.createEmpty();
        setEditorState(state);
      }, [boletim.historico]);

      const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

   return ( <>
        <Container  style={{fontSize:"12px"}}>
            <br></br>
            <Row className="text-center">
                <Col>
                    <BandeiraMaranhao/>
                </Col>
                <Col style={{fontSize:"10px"}}>
                    <p><b>BOLETIM DE OCORRÊNCIA – PMMA <br/>ESTADO DO MARANHAO</b><br/>
                    4º Batalhão de Polícia Militar<br/>
                    Endereço: Av. Contorno, 176, Balsas - MA</p>
                </Col>
                <Col>
                    <LogoPMMA/>
                </Col>
            </Row>
            <Row>
               
                <Col className="text-center">Ocorrencia numero:<b> {boletim.numero}</b> - Registrada em <b>11 de Junho de 2022 </b>às <b>18:55h</b></Col>
            </Row>
            <hr/>
            <Row>
                <Col className="text-center"><h6>Fato Comunicado<Link className="d-print-none" to="/header">Editar</Link></h6></Col>
                
            </Row>
            <br/>
            <Row>
                <Col>
                    Natureza da Ocorrência: {boletim.natureza} 
                </Col>
                <Col>
                    Data :  {boletim.data} 
                </Col>
                <Col>
                    Horário: {boletim.horario}  
                </Col>
            </Row>
            <Row>
                <Col>Local: {boletim.endereco}, {boletim.numeroEndereco}  </Col>
                <Col>Bairro: {boletim.bairro}</Col>
                <Col>{boletim.municipio}</Col>
            </Row>
            <Row>
                <Col >Ponto de Refêrencia : {boletim.referencia}</Col>
                
                <Col >Coordenadas: {boletim.latitude},{boletim.longitude}</Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row>
            
                <Col className="text-center"><h6>Envolvido(s)<Link className="d-print-none" to="/envolvido">Editar</Link></h6></Col>
                
            </Row>

            {boletim.envolvidos.map(envolvido=><EnvolvidosDetalhe key={envolvido.id} envolvido={envolvido}/>)}
           
            
            <hr/>
        </Container>
    
        <Container style={{fontSize:"12px"}}>
            {/**faz a quebra de pagina na impressao */}
            {/* <Row style={{pageBreakBefore:"always"}}>
            </Row>  */}

            <Row>
                <Col className="text-center"><h6>Armas e Objetos Apreendidos<Link className="d-print-none" to="/material">Editar</Link></h6></Col>
            </Row>
           
                {boletim.materiaisApreendidos.map(material=><MaterialDetalhe key={material.id} material={material}/>)}
                   

            <hr/>

            <Row>
                <Col className="text-center"><h6>Histórico <Link className="d-print-none" to="/historico">Editar</Link></h6></Col>
            </Row>

            <Row>

                <Editor editorState={editorState} onChange={setEditorState} readOnly={true}/>
              
            </Row>
            <hr/>

            <Row>
                <Col className="text-center"><h6>Efetivo Empenhado</h6></Col>
            </Row>
            <Row>

            {boletim.efetivo.map(policial=><PolicialDetalhe key={policial.id} policial={policial}/>)}
                 
            </Row>
            <br/>
            <Row>
                <Col className="text-center">
                    {/* d-print-none exclui o botao do pdf*/}
                    <Button 
                        size="sm"
                        variant="success" 
                        className="d-print-none"
                        onClick={()=>window.print()}>
                            Imprimir <AiFillPrinter/>
                    </Button>
                </Col>
            </Row>
            <br/><br/>
        </Container>
    
    </> );
}
 
export default BoletimDetalhe