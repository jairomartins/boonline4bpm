import React, {useState,useEffect} from "react";

import { Container, Row , Button} from "react-bootstrap";

import NavPage from "../NavPage";

import {Editor, EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

import Cabecalho from "../Cabecalho/Cabecalho";

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
            <Row style={{ border: "1px solid black", minHeight: "200px", cursor: "text"}}
                onClick={focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
            </Row>
            <br/>
            <Button onClick={handleSalvarHistorico}>Save</Button>
            <NavPage prev="/efetivo" next="/resumo"/>

           
        </Container>
        
    </> );
}
 
export default Historico;