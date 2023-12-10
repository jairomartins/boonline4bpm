
// import axios from "axios";
import React from "react";
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import { Container } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";

// import { Button, Col, Container, Form, Row} from "react-bootstrap";
// import { VscNewFile } from 'react-icons/vsc';
// import {BsArrowLeft} from 'react-icons/bs'
// import { useNavigate } from "react-router-dom";

// import Cabecalho from "../../components/Cabecalho/Cabecalho";
// import BoletimInformacoes from "../Boletim/BoletimInformacoes";
// import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

// import { Context } from "../../Context/AuthContext";
// import { BoletimContext } from "../../Context/BoletimContext";
// import BoletimList from "../../components/Dashboard/BoletimList";
// import FormBuscarBoletimData from "../../components/Form/FormBuscarBoletimData";
// import FormBuscarBoletimNumero from "../../components/Form/FormBuscarBoletimNumero";
// import BoletimListRelatorioP3 from "../../components/Dashboard/BoletimListRelatorioP3";


// const API_PORT = process.env.REACT_APP_API_PORT
// const BASE_URL = process.env.REACT_APP_BASE_URL

const DashboardOcorrencias = (cidadeLogin) => {

   
    return ( 
        <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>
        <Container>
        <h1>
            Gerenciador de Ocorrencias
        </h1>
        </Container>
        </>
    );
}
 
export default DashboardOcorrencias;