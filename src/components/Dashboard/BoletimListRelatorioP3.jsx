import { stateFromHTML } from "draft-js-import-html";
import { convertToRaw, EditorState } from "draft-js";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const BoletimListRelatorioP3 = ({ boletimList }) => {
  const [historicos, setHistoricos] = useState([]);
  const [relatorioCompleto, setRelatorioCompleto] = useState("");

  useEffect(() => {
    const textos = boletimList.map((boletim) => {
      const contentState = stateFromHTML(boletim.historicohtml || "");
      const editorState = EditorState.createWithContent(contentState);
      const raw = convertToRaw(editorState.getCurrentContent());

      return raw.blocks.map((block) => block.text).join("\n");
    });

    setHistoricos(textos);

    // monta texto completo para copiar (já em MAIÚSCULAS)
    const relatorio = boletimList
      .map((boletim, index) => {
        return (
`📄 BO: ${boletim.numero}
🔢 OCORRÊNCIA: ${index + 1}
📅 DATA: ${boletim.data}
⏰ HORA: ${boletim.horario}
📍 LOCAL: ${boletim.endereco}, ${boletim.numeroEndereco}, ${boletim.bairro} - ${boletim.municipio}
⚠️ NATUREZA: ${boletim.natureza}
📝 HISTÓRICO:
${textos[index]}

`
        );
      })
      .join("\n--------------------\n\n")
      .toUpperCase(); // tudo em maiúsculo

    setRelatorioCompleto(relatorio);
  }, [boletimList]);

  const copiarRelatorio = () => {
    navigator.clipboard.writeText(relatorioCompleto).then(() => {
      alert("✅ RELATÓRIO COPIADO PARA A ÁREA DE TRANSFERÊNCIA!");
    });
  };

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" size="sm" onClick={copiarRelatorio}>
          📋 COPIAR RELATÓRIO
        </Button>
      </div>

      {boletimList.map((boletim, index) => (
        <div key={index} className="mb-4 text-uppercase">
          <p>📄 BO: {boletim.numero}</p>
          <p>🔢 OCORRÊNCIA: {index + 1}</p>
          <p>📅 DATA: {boletim.data}</p>
          <p>⏰ HORA: {boletim.horario}</p>
          <p>
            📍 LOCAL: {boletim.endereco}, {boletim.numeroEndereco},{" "}
            {boletim.bairro} - {boletim.municipio}
          </p>
          <p>⚠️ NATUREZA: {boletim.natureza}</p>
          <p>📝 HISTÓRICO:</p>
          <p>{historicos[index]}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BoletimListRelatorioP3;
