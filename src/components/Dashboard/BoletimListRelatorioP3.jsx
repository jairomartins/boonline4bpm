import { Editor, EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import 'draft-js/dist/Draft.css';
import { useState, useEffect } from "react";

const BoletimListRelatorioP3 = ({ boletimList }) => {
  const [editorStates, setEditorStates] = useState([]);

  useEffect(() => {
    const mappedStates = boletimList.map((boletim) =>
      EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
    );
    setEditorStates(mappedStates);
  }, [boletimList]);

  return (
    <>
      {boletimList.map((boletim, index) => (
        <div key={index}>
          <p>*BO:* {boletim.numero}</p>
          <p>*DATA:* {boletim.data}</p>
          <p>*HORA:* {boletim.horario}</p>
          <p>*LOCAL:* {boletim.endereco}, {boletim.numeroEndereco} , {boletim.bairro} - {boletim.municipio}</p>
          <p>*NATUREZA:* {boletim.natureza}</p>
          <p>*HISTORICO:*</p>
          {editorStates[index] && (
            <Editor
              editorState={editorStates[index]}
              onChange={(newEditorState) => {
                const newStates = [...editorStates];
                newStates[index] = newEditorState;
                setEditorStates(newStates);
              }}
              readOnly={true}
            />
          )}
          <hr/>
        </div>
      ))}
    </>
  );
};

export default BoletimListRelatorioP3;
