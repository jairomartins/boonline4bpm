import React, {useState,useEffect} from "react";

import { Container, Row , Col, Button, ProgressBar, Card} from "react-bootstrap";


import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


//modulo que converte conteudo do editor draft-js para html 
import {stateToHTML} from 'draft-js-export-html';
// modulo que converte 
import {stateFromHTML} from 'draft-js-import-html';


import Cabecalho from "../Cabecalho/Cabecalho";

import {BiSave, BiEdit} from "react-icons/bi"
import {AiOutlineFileDone}from "react-icons/ai"
import {BsArrowLeft } from "react-icons/bs"


import { Link } from "react-router-dom";

import axios from "axios"

const Historico = ({boletim,setBoletim}) => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())


    useEffect(() => {
        const state = boletim.historicohtml
          ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
          : EditorState.createEmpty();
        setEditorState(state);
    }, [boletim.historicohtml]);


    const saveToDB = async ()=>{
        console.log("----- historico  ----- \n"+boletim.historicojson)
        await axios.post("http://192.168.0.100:3001/adm/salvarBoletim",{
            boletim: boletim,
        })
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response)
            // console.log('tentei mano!')
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .then(function () {
            // sempre será executado
        });
    }

    const handleSalvarHistorico =async ()=>{
        // const his = editorState.getCurrentContent()

        let html = stateToHTML(editorState.getCurrentContent());
        console.log(html)
        // setBoletim({...boletim, historicojson:editorState.getCurrentContent()})
  
       
         setBoletim({...boletim, historicohtml:html})
       
    }

    const editor = React.useRef(null);

    const focusEditor = ()=> {
        editor.current.focus()
    }

    return ( <>

        <Cabecalho texto={"Histórico da Ocorrência"}/>
        <br/>
        <Container fluid>

            <ProgressBar variant="success" striped now={100} />
            <hr/>
            <Card>
                <Card.Header>
                    <Card.Title>
                        <BiEdit/> Relato do Fato
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row style={{ minHeight: "200px", cursor: "text", minWidth:"90%"}}
                    onClick={focusEditor}>
                        <Col>
                            <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            
            <br/>
            <Row className="text-center">
                <Col>
                    <Button  
                        variant="outline-primary">
                        <Link 
                            className="text-decoration-none" 
                            to="/efetivo">
                                <BsArrowLeft/> Voltar
                        </Link>
                    </Button>
               </Col>

                <Col>
                    <Button onClick={handleSalvarHistorico}>
                        Salvar <BiSave/>
                    </Button>
                </Col>
               
                <Col>
                    <Button
                        variant="warning"
                        onClick={saveToDB}>
                            <Link 
                            className="text-decoration-none"
                            to="/VerBoletim"> 
                            Finalizar <AiOutlineFileDone/>
                            </Link>
                    </Button>
                </Col>
                
            </Row>
            
            {/* <NavPage prev="/efetivo" next="/resumo"/> */}

           
        </Container>
        
    </> );
}
 
export default Historico;