import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col, Button, ProgressBar, Card, Spinner, Toast } from "react-bootstrap";
import { BoletimContext } from "../../Context/BoletimContext";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";

import { BiEdit } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

const API_URL = `${process.env.REACT_APP_PROTOCOLO}://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_API_PORT}/api/verify-text`;

const Historico = () => {
  const { boletim, setBoletim } = useContext(BoletimContext);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const state = boletim.historicohtml
      ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
      : EditorState.createEmpty();
    setEditorState(state);
  }, [boletim.historicohtml]);

  const focusEditor = () => {
    editorRef.current.focus();
  };

  const handleSalvarHistorico = () => {
    const html = stateToHTML(editorState.getCurrentContent());
    setBoletim({ ...boletim, historicohtml: html });
    navigate("../VerBoletim");
  };

  const handleVerificarIA = async () => {
    setLoading(true);
    const textoOriginal = stateToHTML(editorState.getCurrentContent());

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textoOriginal }),
      });

      const data = await response.json();
      if (data.data?.correctedText) {
        const updatedState = EditorState.createWithContent(stateFromHTML(data.data.correctedText));
        setEditorState(updatedState);
        setToastMessage("Texto corrigido com sucesso!");
      } else {
        setToastMessage("Erro ao processar o texto.");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      setToastMessage("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
      setShowToast(true);
    }
  };

  return (
    <>
      <CabecalhoBoletim texto="Histórico da Ocorrência" />
      <br />
      <Container fluid>
        <ProgressBar variant="success" striped now={100} />
        <hr />
        <Card>
          <Card.Header>
            <Card.Title>
              <BiEdit /> Relato do Fato
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row
              style={{ minHeight: "200px", cursor: "text", minWidth: "90%" }}
              onClick={focusEditor}
            >
              <Col>
                <Editor ref={editorRef} editorState={editorState} onChange={setEditorState} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
        <Row className="text-center">
          <Col>
            <Button variant="outline-primary">
              <Link className="text-decoration-none" to="../efetivo">
                <BsArrowLeft /> Voltar
              </Link>
            </Button>
          </Col>
          <Col>
            <Button onClick={handleSalvarHistorico} variant="warning">
              Revisar <AiOutlineFileDone />
            </Button>
          </Col>
          <Col>
            <Button onClick={handleVerificarIA} variant="success" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />{" "}
                  Verificando...
                </>
              ) : (
                "Corrigir texto com IA"
              )}
            </Button>
          </Col>
        </Row>
        <hr />
      </Container>

      {/* Toast para mensagens */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Notificação</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
};

export default Historico;
