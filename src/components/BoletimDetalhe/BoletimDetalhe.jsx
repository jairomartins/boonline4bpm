import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container, Button, Table } from "react-bootstrap";
import axios from "axios";

import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css';
import { stateFromHTML } from 'draft-js-import-html';

import { AiFillPrinter } from "react-icons/ai";
import { BsArrowLeft, BsFillPlusCircleFill } from "react-icons/bs";
import { BiSave } from "react-icons/bi";

import Logo4BPM from "../Logo4BPM";
import LogoPMMA from "../Logo_PMMA";

import MaterialDetalhe from "./MaterialDetalhe";
import PolicialDetalhe from "./PolicialDetalhe";
import EnvolvidosDetalhe from "./EnvolvidosDetalhe";

import { Link, useNavigate } from "react-router-dom";
import { BoletimContext } from "../../Context/BoletimContext";

const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;
const API_PORT = process.env.REACT_APP_API_PORT;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const BoletimDetalhe = () => {
  const { boletim, setBoletim } = useContext(BoletimContext);
  const navigate = useNavigate();

  // State do editor
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Inicializa editor quando o boletim muda
  useEffect(() => {
    const state = boletim.historicohtml
      ? EditorState.createWithContent(stateFromHTML(boletim.historicohtml))
      : EditorState.createEmpty();
    setEditorState(state);
  }, [boletim.historicohtml]);

  // Cria um novo boletim
  const novoBoletim = () => {
    const newBoletim = {
      numero: "",
      natureza: "",
      data: "",
      horario: "",
      endereco: "",
      bairro: "",
      municipio: "",
      referencia: "",
      latitude: "",
      longitude: "",
      envolvidos: [],
      materiaisApreendidos: [],
      efetivo: [],
      historicohtml: "",
      // NÃO colocar id ou _id, MongoDB vai gerar
    };
    setBoletim(newBoletim);
    navigate('/dashboard');
  };

  // Salva boletim no backend
  const saveToDB = async () => {
    try {
      const response = await axios.post(
        `${PROTOCOLO}://${BASE_URL}:${API_PORT}/adm/boletim/create`,
        { boletim: boletim },
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token"),
          },
        }
      );

      alert(response.data.message);
      console.log(response.data.boletim);

      // Atualiza state com _id retornado pelo backend
      setBoletim(response.data.boletim);

    } catch (err) {
      console.error(err);
      alert("Erro ao salvar o boletim");
    }
  };

  // Imprime o boletim
  const printPage = () => {
    saveToDB(); // salva antes de imprimir
    document.title = `BO_${boletim.numero}_${boletim.data}`;
    window.print();
  };

  return (
    <Container style={{ fontSize: "12px" }}>
      <br />
      <Row className="text-center">
        <Col><LogoPMMA /></Col>
        <Col style={{ fontSize: "10px" }}>
          <b>
            <p>ESTADO DO MARANHÃO <br />
              SECRETARIA DE ESTADO DA SEGURANÇA PÚBLICA<br />
              POLÍCIA MILITAR DO MARANHÃO<br />
              COMANDO DO POLICIAMENTO DE ÁREA DO INTERIOR – CPAI-6<br />
              4º BATALHÃO DE POLÍCIA MILITAR
            </p>
          </b>
        </Col>
        <Col><Logo4BPM /></Col>
      </Row>

      <Row>
        <Col className="text-center">
          OCORRÊNCIA NUMERO:<b> {boletim.numero} {boletim.dataRegistro}</b>
        </Col>
      </Row>

      <hr />

      {/* Dados do boletim */}
      <Row>
        <Col><b>Natureza da Ocorrência: </b> {boletim.natureza}</Col>
        <Col><b>Data: </b> {boletim.data}</Col>
        <Col><b>Horário: </b> {boletim.horario}</Col>
      </Row>
      <Row>
        <Col><b>Local:</b> {boletim.endereco} {boletim.numeroEndereco}</Col>
        <Col><b>Bairro:</b> {boletim.bairro}</Col>
        <Col><b>Municipio:</b> {boletim.municipio}</Col>
      </Row>
      <Row>
        <Col><b>Ponto de Refêrencia :</b> {boletim.referencia}</Col>
        <Col><b>Coordenadas:</b> {boletim.latitude} {boletim.longitude}</Col>
        <Col></Col>
      </Row>
      <hr />

      {/* Envolvidos */}
      <Row className="text-center"><h6>ENVOLVIDO(S)<Link className="d-print-none" to="/boletim/envolvido">Editar</Link></h6></Row>
      {boletim.envolvidos.map(envolvido => <EnvolvidosDetalhe key={envolvido._id || envolvido.id} envolvido={envolvido} />)}

      <hr />

      {/* Materiais */}
      <Row className="text-center"><h6>ARMAS E OBJETOS APREENDIDOS<Link className="d-print-none" to="/boletim/material">Editar</Link></h6></Row>
      {boletim.materiaisApreendidos.map(material => <MaterialDetalhe key={material._id || material.id} material={material} />)}

      <hr />

      {/* Histórico */}
      <Row className="text-center"><h6>HISTÓRICO <Link className="d-print-none" to="/boletim/historico">Editar</Link></h6></Row>
      <Row className="text-justify">
        <Editor editorState={editorState} onChange={setEditorState} readOnly={true} />
      </Row>
      <hr />

      {/* Efetivo */}
      <Row className="text-center"><h6>EFETIVO EMPREGADO <Link className="d-print-none" to="/boletim/efetivo">Editar</Link></h6></Row>
      <Row>
        {boletim.efetivo.map(policial => <PolicialDetalhe key={policial._id || policial.id} policial={policial} />)}
      </Row>
        {/* Unidade de Entrega */}
            <hr />
            <Row className="text-center"><h6>UNIDADE DE ENTREGA</h6></Row>
            <Table borderless>
            <tbody>
                <tr>
                <td>Unidade ___________________________</td>
                <td>Data  _______/________/_______</td>
                <td>Hora       _________:_________</td>
                </tr>
                <tr>
                <td>Matricula ___________________________</td>
                <td>Nome ______________________________</td>
                <td>Assinatura ___________________________</td>
                </tr>
            </tbody>
            </Table>
      <hr />
      <Row className="text-center">
        <Col>
          <Button className="d-print-none" size="sm" variant="outline-primary">
            <Link className="text-decoration-none" to="../historico">
              <BsArrowLeft /> Voltar
            </Link>
          </Button>
        </Col>
        <Col className="text-center">
          <Button size="sm" variant="warning" className="d-print-none" onClick={printPage}>
            Imprimir <AiFillPrinter />
          </Button>
        </Col>
        <Col>
          <Button onClick={saveToDB} className="d-print-none" size="sm" variant="success">
            Salvar <BiSave />
          </Button>
        </Col>
        <Col>
          <Button onClick={novoBoletim} className="d-print-none" size="sm" variant="danger">
            Novo B.O <BsFillPlusCircleFill />
          </Button>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default BoletimDetalhe;
