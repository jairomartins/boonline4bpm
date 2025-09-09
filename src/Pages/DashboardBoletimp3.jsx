import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { VscNewFile } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Cabecalho from "../components/Cabecalho/Cabecalho";
import BoletimInformacoes from "./Boletim/BoletimInformacoes";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

import { Context } from "../Context/AuthContext";
import { BoletimContext } from "../Context/BoletimContext";
import BoletimList from "../components/Dashboard/BoletimList";
import FormBuscarBoletimData from "../components/Form/FormBuscarBoletimData";
import FormBuscarBoletimNumero from "../components/Form/FormBuscarBoletimNumero";
import BoletimListRelatorioP3 from "../components/Dashboard/BoletimListRelatorioP3";

// URL da API a partir das variáveis de ambiente
const API_URL = process.env.REACT_APP_API_URL;

const DashboardBoletimp3 = () => {
  const navigate = useNavigate();
  const { municipio } = useContext(Context);
  const { boletim, setBoletim } = useContext(BoletimContext);

  const [boletimList, setBoletimList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("buscarPorNumero");
  const [idBusca, setIdBusca] = useState("");

  const [exibeBoletim, setExibeBoletim] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // -------------------------------
  // Buscar boletim por número
  // -------------------------------
  const buscarBoletim = async () => {
    setError(null);
    setExibeBoletim(false);
    setBoletimList([]);
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${API_URL}/adm/boletim/list/${idBusca}/${municipio}`,
        {
          headers: { "x-access-token": localStorage.getItem("x-access-token") },
        }
      );

      setBoletim(data);
      setExibeBoletim(true);
    } catch (err) {
      setError("Não foi possível encontrar o boletim.");
      setBoletim({});
    } finally {
      setIsLoading(false);
    }
  };

  // -------------------------------
  // Buscar boletins por data
  // -------------------------------
  const buscarBoletimPorDia = async () => {
    setError(null);

    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${API_URL}/adm/boletim/dia/${idBusca}`,
        {
          headers: { "x-access-token": localStorage.getItem("x-access-token") },
        }
      );

      setBoletimList(data);
      setExibeBoletim(false);
    } catch (err) {
      setError("Erro ao buscar boletins por data.");
      setBoletimList([]);
    } finally {
      setIsLoading(false);
    }
  };

  // -------------------------------
  // Criar novo boletim
  // -------------------------------
  const handleClickNovoBoletim = () => {
    const newBoletim = {
      id: uuidv4(),
      envolvidos: [],
      materiaisApreendidos: [],
      efetivo: [],
      images: [],
    };

    setBoletim(newBoletim);
    navigate("../boletim/header");
  };

  const handleClickVoltar = () => navigate("/dashboard");

  // -------------------------------
  // Renderiza formulário de busca
  // -------------------------------
  const renderSelectedForm = () => {
    if (selectedOption === "buscarPorNumero") {
      return <FormBuscarBoletimNumero setIdBusca={setIdBusca} checkBoletim={buscarBoletim} />;
    }
    if (selectedOption === "buscarPorData") {
      return <FormBuscarBoletimData setIdBusca={setIdBusca} checkBoletim={buscarBoletimPorDia} />;
    }
    return null;
  };

  return (
    <>
      <Cabecalho />

      <Container>
        <LoadSpinner visible={isLoading} />

        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form.Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="buscarPorNumero">Buscar por Número</option>
              <option value="buscarPorData">Buscar por Data</option>
            </Form.Select>

            <div className="mt-3">{renderSelectedForm()}</div>
          </Col>
        </Row>

        {/* Exibe boletim único */}
        {exibeBoletim && (
          <Row className="justify-content-md-center">
            <Col md={8}>
              <BoletimInformacoes boletim={boletim} setBoletim={setBoletim} />
            </Col>
          </Row>
        )}

        {/* Exibe lista de boletins */}
        {boletimList.length > 0 && (
          <>
            <Row className="justify-content-md-center mt-3">
              <Col md={8}>
                <BoletimList boletimList={boletimList} />
              </Col>
            </Row>

            <Row className="justify-content-md-center mt-3">
              <Col md={8}>
                <BoletimListRelatorioP3 boletimList={boletimList} />
              </Col>
            </Row>
          </>
        )}

        {/* Botões */}
        <Row className="justify-content-md-center mt-4 g-2">
            <Col xs={12} sm={3} className="d-grid">
                <Button
                onClick={handleClickVoltar}
                variant="outline-primary"
                size="sm"
                className="mb-2 mb-sm-0"
                >
                <BsArrowLeft /> Voltar
                </Button>
            </Col>
            <Col xs={12} sm={3} className="d-grid">
                <Button
                onClick={handleClickNovoBoletim}
                variant="success"
                size="sm"
                className="mb-2 mb-sm-0"
                >
                Novo Boletim <VscNewFile />
                </Button>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardBoletimp3;
