
import axios from "axios";
import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, Col, Container, Row } from "react-bootstrap";
import { VscNewFile } from 'react-icons/vsc';
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormBuscarBo from "../../components/Form/FormBuscarBo";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

import { Context } from "../../Context/AuthContext";
import { BoletimContext } from "../../Context/BoletimContext";

const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL

// import BoletimInformacoesList from "../Boletim/BoletimInformacoesList";

const DashboardBoletim = (cidadeLogin) => {

    const {cidade} = useContext(Context)
    
    const {boletim, setBoletim} = useContext(BoletimContext)


    const navigate = useNavigate()       
    const [exibeBoletim, setExibeBoletim] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // const [exibeBoletimList, setExibeBoletimList] = useState(false)

    

    const [idBusca, setIdBusca] = useState('')
    
    // faz requisição GET que verifica se o boletim esta cadastrado no banco de dados
    // se encontrar usa o objeto de retorno para setar o boletim e exibir detalhes
    //  
    //
    const buscarBoletim = async () =>{

        console.log("buscarBoletim boletim dashboard id : "+idBusca)
        
        setIsLoading(true)

        axios.get(`http://${BASE_URL}:${API_PORT}/adm/boletim/list/${idBusca}/${cidade}`,{
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

    const handleClickNovoBoletim = ()=>{
        const newboletim = ({
            id:uuidv4(),
            envolvidos:[],
            materiaisApreendidos:[],
            efetivo:[],
        })
        setBoletim(newboletim)
        navigate('../boletim/header')
    }

    const handleClickVoltar = ()=>{
        navigate('/dashboard')
    }

    return ( 

    <>
        <Cabecalho/>
            
        <Container>
            <br/>
            <LoadSpinner visible={isLoading}/>
            <Row className="justify-content-md-center">
                <Col md={6} sm={12}>
                    <FormBuscarBo setIdBusca={setIdBusca} checkBoletim={buscarBoletim}/>
                </Col>
            </Row>
            <hr/>
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
 
export default DashboardBoletim;