import React,{useState, useEffect, useContext} from "react";
import { Col, Row, Container, Button, Table} from "react-bootstrap";
import axios from "axios"

import {Editor,EditorState} from "draft-js"
import 'draft-js/dist/Draft.css';

import {stateFromHTML} from 'draft-js-import-html';
import { v4 as uuidv4 } from "uuid";

import { AiFillPrinter } from "react-icons/ai"
import {BsArrowLeft,BsFillPlusCircleFill } from "react-icons/bs"
import {BiSave} from "react-icons/bi"

// import BandeiraMaranhao from "../BandeiraMaranhao";
import Logo4BPM from "../Logo4BPM"
// import BrasaoMa from "../Brasao_Maranhao"
import LogoPMMA from "../Logo_PMMA";

import MaterialDetalhe from "./MaterialDetalhe";
import PolicialDetalhe from "./PolicialDetalhe";
import EnvolvidosDetalhe from "./EnvolvidosDetalhe";

import { Link, useNavigate } from "react-router-dom";
import { BoletimContext } from "../../Context/BoletimContext";

const BoletimDetalhe = () => {

    const {boletim, setBoletim} = useContext(BoletimContext)

    useEffect(() => {
        const state = boletim.historicohtml
          ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
          : EditorState.createEmpty();
        setEditorState(state);
      }, [boletim.historicohtml]);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    
    const navigate = useNavigate()
      
    const saveToDB = async ()=>{
        console.log("----- historico  ----- \n"+boletim.historicohtml)
        await axios.post("http://177.153.59.153:433/adm/salvarBoletim",{
            boletim: boletim,
        })
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response)
            alert('Boletim salvo com sucesso !')
            // console.log('tentei mano!')
        })
        .catch(function (error) {
            // manipula erros da requisição
            alert('Erro ao salvar o boletim ')
            console.error(error);
        })
        .then(function () {
            // sempre será executado
        });
    }

    const novoBoletim = async()=>{
        const newboletim = ({
            id:uuidv4(),
            envolvidos:[],
            materiaisApreendidos:[],
            efetivo:[],
        })
        setBoletim(newboletim)
        navigate('/dashboard')
    }


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
                <Col><b>Local:</b> {boletim.endereco} {boletim.numeroEndereco}  </Col>
                <Col><b>Bairro:</b> {boletim.bairro}</Col>
                <Col><b>Municipio:</b> {boletim.municipio}</Col>
            </Row>
            <Row>
                <Col><b>Ponto de Refêrencia :</b> {boletim.referencia}</Col>
                
                <Col><b>Coordenadas:</b> {boletim.latitude} {boletim.longitude}</Col>
                <Col></Col>
            </Row>
            <hr/>
            <Row>
            
                <Col className="text-center"><h6>ENVOLVIDO(S)<Link className="d-print-none" to="/envolvido">Editar</Link></h6></Col>
                
            </Row>

            {boletim.envolvidos.map(envolvido=><EnvolvidosDetalhe key={envolvido.id} envolvido={envolvido}/>)}
           
            
            <hr/>
        </Container>
    
        <Container style={{fontSize:"12px"}}>
            {/**faz a quebra de pagina na impressao */}
            {/* <Row style={{pageBreakBefore:"always"}}>
            </Row>  */}

            <Row>
                <Col className="text-center"><h6>ARMAS E OBJETOS APREENDIDOS<Link className="d-print-none" to="/material">Editar</Link></h6></Col>
            </Row>
           
                {boletim.materiaisApreendidos.map(material=><MaterialDetalhe key={material.id} material={material}/>)}
                   

            <hr/>

            <Row>
                <Col className="text-center"><h6>HISTÓRICO <Link className="d-print-none" to="/historico">Editar</Link></h6></Col>
            </Row>

            <Row className="text-justify">
                <Editor editorState={editorState} onChange={setEditorState} readOnly={true}/>
              
            </Row>
            <hr/>

            <Row>
                <Col className="text-center"><h6>EFETIVO EMPREGADO <Link className="d-print-none" to="/efetivo">Editar</Link></h6></Col>
            </Row>
            <Row>

            {boletim.efetivo.map(policial=><PolicialDetalhe key={policial.id} policial={policial}/>)}
                 
            </Row>
            <hr/>
            <Row>
                <Col className="text-center"><h6>UNIDADE DE ENTREGA</h6></Col>
            </Row>
            <Table borderless>
                <tbody>
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
                </tbody>
            </Table>

            <Row className="text-center">
                <Col>
                    <Button
                        className="d-print-none"
                        size="sm"  
                        variant="outline-primary">
                        <Link 
                            className="text-decoration-none" 
                            to="../historico">
                                <BsArrowLeft/> Voltar
                        </Link>
                    </Button>
               </Col>
                <Col className="text-center">
                    {/* d-print-none exclui o botao do pdf*/}
                    <Button 
                        size="sm"
                        variant="warning" 
                        className="d-print-none"
                        onClick={()=>{document.title = "BO_"+boletim.numero+"_"+boletim.data;window.print()}}>
                            Imprimir <AiFillPrinter/>
                    </Button>
                </Col>
                <Col>
                    <Button

                        onClick={saveToDB}
                        className="d-print-none"
                        size="sm"  
                        variant="success">
                        
                        Salvar <BiSave/>
                        
                    </Button>
               </Col>
                <Col>
                    <Button

                        onClick={novoBoletim}
                        className="d-print-none"
                        size="sm"  
                        variant="danger">
                        
                        Novo B.O <BsFillPlusCircleFill/>
                        
                    </Button>
               </Col>
            </Row>
            <br/>
            <hr/>
            <p className="d-print-none"><b>OBS:</b></p>
            <p className="d-print-none"><b>I -  Salvar</b> -  Para salvar o boletim no banco de dados;</p>
            <p className="d-print-none"><b>II - Imprimir</b> -  Para imprimir o boletim ou salvar PDF;</p>
            <p className="d-print-none"><b>III -  Novo B.O</b> -  Para Iniciar um novo boletim, todos os dados preenchidos serão apagados</p>
        </Container>
    
    </> );
}
 
export default BoletimDetalhe