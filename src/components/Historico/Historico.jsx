import React, { useState, useEffect } from "react";

import {Editor,EditorState,convertToRaw, convertFromRaw} from "draft-js"
import 'draft-js/dist/Draft.css';
import { Container, Row , Button} from "react-bootstrap";


import NavPage from "../NavPage";

const Historico = ({boletim,setBoletim}) => {
    const [editorState, setEditorState] = useState()

    useEffect(() => {
        const state = boletim.historico
          ? EditorState.createWithContent(convertFromRaw(boletim.historico))
          : EditorState.createEmpty();
        setEditorState(state);
      }, [boletim.historico]); // add 'value' to the dependency list to recalculate state when value changes.
    
    const handleSalvarHistorico = ()=>{
        const his = editorState.getCurrentContent()
        console.log(convertToRaw(his))
        setBoletim({...boletim, historico:convertToRaw(his)})
    }

    return ( <>
        <Container className="text-center">
            <h1>Historico da Ocorrencia</h1>
            <Row>
                <Editor 
                    editorState={editorState}
                    onChange={setEditorState}
                    />
            </Row>

            <Button onClick={handleSalvarHistorico}>Save</Button>
            <NavPage prev="/efetivo" next="/resumo"/>

           
        </Container>
    
    </> );
}
 
export default Historico;