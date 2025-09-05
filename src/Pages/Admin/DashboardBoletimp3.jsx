
import axios from "axios";
import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { VscNewFile } from 'react-icons/vsc';
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

import { Context } from "../../Context/AuthContext";
import { BoletimContext } from "../../Context/BoletimContext";
import BoletimList from "../../components/Dashboard/BoletimList";
import FormBuscarBoletimData from "../../components/Form/FormBuscarBoletimData";
import FormBuscarBoletimNumero from "../../components/Form/FormBuscarBoletimNumero";
import BoletimListRelatorioP3 from "../../components/Dashboard/BoletimListRelatorioP3";

const PROTOCOLO = process.env.REACT_APP_PROTOCOLO
const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL

const DashboardBoletimp3 = (cidadeLogin) => {

    const {municipio} = useContext(Context)
    
    const {boletim, setBoletim} = useContext(BoletimContext)

    const [boletimList, setBoletimList]= useState([])


    const navigate = useNavigate()      

    const [exibeBoletim, setExibeBoletim] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [exibeBoletimList, setExibeBoletimList] = useState(false)
    const [idBusca, setIdBusca] = useState('')
    const [selectedOption, setSelectedOption] = useState('buscarPorNumero'); // Estado para armazenar a opção selecionada


    
    // faz requisição GET que verifica se o boletim esta cadastrado no banco de dados
    // se encontrar usa o objeto de retorno para setar o boletim e exibir detalhes
    const buscarBoletim = async () =>{
        setExibeBoletimList(false)
        console.log("buscarBoletim boletim dashboard id : "+idBusca)
        console.log("buscando na cidade: "+municipio)

        setIsLoading(true)

        axios.get(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/adm/boletim/list/${idBusca}/${municipio}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            console.log(response.data)
            setBoletim(response.data)
            setExibeBoletim(true)
            setIsLoading(false)
        }).catch(function (error) {
            // manipula erros da requisição
            setBoletim({})
            console.error(error)
            setIsLoading(false)
        })
        .then(function () {
            // sempre será executado
        });
    }


    const buscarBoletimPorDia = async () =>{
        console.log("buscarBoletim boletim dashboard dia : "+idBusca)
        setIsLoading(true)
        axios.get(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/adm/boletim/dia/${idBusca}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            console.log(response.data[0]) 
            setExibeBoletimList(true)
            setBoletimList(response.data)
            setExibeBoletimList(true)
            setExibeBoletim(false)
            console.log(boletimList)
            setIsLoading(false)
        }).catch(function (error) {
            // manipula erros da requisição
            setBoletimList({})
            console.error(error)
            setIsLoading(false)
        })
        .then(function () {
            // sempre será executado
        });
    }

    const handleClickNovoBoletim = ()=>{
        const newboletim = ({
            id:uuidv4(),
            envolvidos:[],
            materiaisApreendidos:[],
            efetivo:[],
            images:[]
        })
        setBoletim(newboletim)
        navigate('../boletim/header')
    }

    const handleClickVoltar = ()=>{
        navigate('/dashboard')
    }

    // Função para renderizar o formulário com base na opção selecionada
    const renderSelectedForm = () => {
        switch (selectedOption) {
        case 'buscarPorNumero':
            return <FormBuscarBoletimNumero setIdBusca={setIdBusca} checkBoletim={buscarBoletim} />;
        case 'buscarPorData':
            return <FormBuscarBoletimData setIdBusca={setIdBusca} checkBoletim={buscarBoletimPorDia} />;
        default:
            return null;
        }
    };
    return ( 

    <>
        <Cabecalho/>
            
        <Container>
            <LoadSpinner visible={isLoading}/>
            <Row className="justify-content-md-center">
            <div>
                <Form.Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="">Escolha uma opção</option>
                    <option value="buscarPorNumero">Buscar por Número</option>
                    <option value="buscarPorData">Buscar por Data</option>
                </Form.Select>
                <br/>
                {/* Renderiza o formulário com base na opção selecionada */}
                {renderSelectedForm()}
            </div>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6} sm={12}>
                    {(exibeBoletim)?
                        <BoletimInformacoes boletim={boletim} setBoletim={setBoletim}/>
                        :
                        ""
                    }
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6} sm={12}>
                    {
                        (exibeBoletimList)?
                            <BoletimList boletimList={boletimList}/>
                        : ''

                    }
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md={6} sm={12}>
                    {
                        (exibeBoletimList)?
                            <BoletimListRelatorioP3 boletimList={boletimList}/>
                        : ''

                    }
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col sm={3} className="justify-content-md-center d-grid gap-2 mt-3">   
                    <Button onClick={handleClickVoltar} variant="outline-primary" size="sm" > 
                    <BsArrowLeft/>Voltar 
                    </Button>   
                </Col>
                <Col sm={3} className="justify-content-md-center d-grid gap-2 mt-3">
                    <Button onClick={handleClickNovoBoletim} variant="success" size="sm"> 
                        Novo Boletim <VscNewFile/>
                    </Button>
                </Col>
            </Row>

        </Container>

    </> );
}
 
export default DashboardBoletimp3;