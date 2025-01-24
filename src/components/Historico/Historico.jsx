import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, ProgressBar, Card, Spinner } from "react-bootstrap";
import { BoletimContext } from "../../Context/BoletimContext";
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

// Modulo que converte conteudo do editor draft-js para HTML
import { stateToHTML } from 'draft-js-export-html';
// Modulo que converte
import { stateFromHTML } from 'draft-js-import-html';

import { BiEdit } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

const PROTOCOLO = process.env.REACT_APP_PROTOCOLO
const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL

const Historico = () => {
    const { boletim, setBoletim } = useContext(BoletimContext);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [revisar, setRevisar] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const state = boletim.historicohtml
            ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
            : EditorState.createEmpty();
        setEditorState(state);
    }, [boletim.historicohtml]);

    const handleSalvarHistorico = async () => {
        setRevisar(false);
        let html = stateToHTML(editorState.getCurrentContent());
        setBoletim({ ...boletim, historicohtml: html });
        navigate('../VerBoletim');
    };

    const handleVerificarIA = async () => {
        setLoading(true);
        const textoOriginal = stateToHTML(editorState.getCurrentContent());
        
        try {
            const response = await fetch(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/api/verify-text`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: textoOriginal })
            });

           
            const data = await response.json();
             console.log(data.data.correctedText);

            if (data.data.correctedText) {
                const updatedState = EditorState.createWithContent(stateFromHTML(data.data.correctedText));
                setEditorState(updatedState);
            } else {
                alert("Erro ao processar o texto.");
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
            alert("Erro ao processar o texto.");
        } finally {
            setLoading(false);
        }
    };

    const editor = React.useRef(null);

    const focusEditor = () => {
        editor.current.focus();
    };

    return (
        <>
            <CabecalhoBoletim texto={"Histórico da Ocorrência"} />
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
                                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
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
                        <Button
                            onClick={handleSalvarHistorico}
                            disabled={revisar}
                            variant="warning"
                        >
                            <Link className="text-decoration-none" to="../VerBoletim">
                                Revisar <AiOutlineFileDone />
                            </Link>
                        </Button>
                    </Col>

                    <Col>
                        <Button
                            onClick={handleVerificarIA}
                            variant="success"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{" "}
                                    Verificando...
                                </>
                            ) : (
                                "Verificar com IA"
                            )}
                        </Button>
                    </Col>
                </Row>
                <hr />
            </Container>
        </>
    );
};

export default Historico;
