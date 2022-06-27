import React, {useState,useEffect} from "react";

import { Container, Row , Col, Button, ProgressBar} from "react-bootstrap";


import {Editor, EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

import Cabecalho from "../Cabecalho/Cabecalho";

import {BiSave} from "react-icons/bi"
import {BsEyeFill}from "react-icons/bs"
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

        <Container className="text-center">

            <ProgressBar variant="success" striped now={100} />
            <hr/>
            <Row style={{ border: "1px solid black", minHeight: "200px", cursor: "text"}}
                onClick={focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
            </Row>
            <br/>
            <Row>
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
                        variant="success"  
                        onClick={handleSalvarHistorico}>
                            <Link to="/resumo"  className="link-light" > 
                            Ver <BsEyeFill/>
                            </Link>
                    </Button>
                </Col>
                
            </Row>
            
            {/* <NavPage prev="/efetivo" next="/resumo"/> */}

           
        </Container>
        
    </> );
}
 
export default Historico;