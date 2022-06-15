import React, {useState,useEffect} from "react";

import { Container, Row , Button} from "react-bootstrap";

import NavPage from "../NavPage";

import {Editor, EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';


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

    return ( <>
        <Container className="text-center">
            <h1>Historico da Ocorrencia</h1>
            <Row>
                <Editor editorState={editorState} onChange={setEditorState} />
            </Row>
            <Button onClick={handleSalvarHistorico}>Save</Button>
            <NavPage prev="/efetivo" next="/resumo"/>

           
        </Container>
    
    </> );
}
 
export default Historico;