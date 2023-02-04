import React, {useState,useEffect, useContext} from "react";

import { Container, Row , Col, Button, ProgressBar, Card} from "react-bootstrap";
import { BoletimContext } from "../../Context/BoletimContext";

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


//modulo que converte conteudo do editor draft-js para html 
import {stateToHTML} from 'draft-js-export-html';
// modulo que converte 
import {stateFromHTML} from 'draft-js-import-html';



import {BiEdit} from "react-icons/bi"
import {AiOutlineFileDone}from "react-icons/ai"
import {BsArrowLeft } from "react-icons/bs"


import { Link, useNavigate } from "react-router-dom";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";



const Historico = () => {

    const {boletim, setBoletim} = useContext(BoletimContext)

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [revisar, setRevisar] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        const state = boletim.historicohtml
          ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
          : EditorState.createEmpty();
        setEditorState(state);
    }, [boletim.historicohtml]);



    const handleSalvarHistorico =async ()=>{
        // const his = editorState.getCurrentContent()
        setRevisar(false)//ativa botao revisar
        let html = stateToHTML(editorState.getCurrentContent());
        console.log(html)
        // setBoletim({...boletim, historicojson:editorState.getCurrentContent()})
  
       
        setBoletim({...boletim, historicohtml:html})
        navigate('../VerBoletim')
    }

    const editor = React.useRef(null);

    const focusEditor = ()=> {
        editor.current.focus()
    }

    return ( <>

        <CabecalhoBoletim texto={"Histórico da Ocorrência"}/>
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
                            to="../efetivo">
                                <BsArrowLeft/> Voltar
                        </Link>
                    </Button>
               </Col>

                {/* <Col>
                    <Button >
                        Salvar histórico <BiSave/>
                    </Button>
                </Col> */}
               
                <Col>
                    <Button
                        onClick={handleSalvarHistorico}
                        disabled={revisar}
                        variant="warning">
                            <Link 
                            className="text-decoration-none"
                            to="../VerBoletim"> 
                            Revisar <AiOutlineFileDone/>
                            </Link>
                    </Button>
                </Col>
                
            </Row>
            
            {/* <NavPage prev="/efetivo" next="/resumo"/> */}
            <hr/>
           
        </Container>
        
    </> );
}
 
export default Historico;