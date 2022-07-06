import React, {useState,useEffect} from "react";

import { Container, Row , Col, Button, ProgressBar, Card} from "react-bootstrap";


import {Editor, EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

import Cabecalho from "../Cabecalho/Cabecalho";

import {BiSave, BiEdit} from "react-icons/bi"
import {AiOutlineFileDone}from "react-icons/ai"
import {BsArrowLeft } from "react-icons/bs"


import { Link } from "react-router-dom";

const Historico = ({boletim,setBoletim}) => {

    useEffect(() => {
        const state = boletim.historico
          ? EditorState.createWithContent(boletim.historico)
          : EditorState.createEmpty();
        setEditorState(state);
      }, [boletim.historico]);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const handleSalvarHistorico = ()=>{
        const his = editorState.getCurrentContent()
        console.log(convertToRaw(his))
        setBoletim({...boletim, historico:editorState.getCurrentContent()})
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
                        onClick={handleSalvarHistorico}>
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