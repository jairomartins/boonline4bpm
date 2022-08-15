
import axios from "axios";
import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

import { Button, Col, Container, Row } from "react-bootstrap";
import { VscNewFile } from 'react-icons/vsc';
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormBuscarBo from "../../components/Form/FormBuscarBo";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";
// import BoletimInformacoesList from "../Boletim/BoletimInformacoesList";

const DashboardBoletim = ({boletim, setBoletim}) => {
    const navigate = useNavigate()       
    const [exibeBoletim, setExibeBoletim] = useState(false);
    // const [exibeBoletimList, setExibeBoletimList] = useState(false)

    // const [boletim, setBoletim] = useState({})

    const [idBusca, setIdBusca] = useState('')

    // const [listaBoletim, setListaBoletim] = useState([{}])



    // faz requisição GET que verifica se o boletim esta cadastrado no banco de dados
    // se encontrar usa o objeto de retorno para setar o boletim e exibir detalhes
    //
    //
    const buscarBoletim = async () =>{
        axios.get(`http://177.153.59.153:433/adm/listByNumero/${idBusca}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            setBoletim(response.data[0])
            setExibeBoletim(true)
        }).catch(function (error) {
            // manipula erros da requisição
            console.error(error);
            console.log('nao foi possivel localzar')
        })
        .then(function () {
            // sempre será executado
        });
    }

    // const buscarListaBoletins = async () =>{
        
    //     axios.get(`http://192.168.0.100:433/adm/listaMeusBos/871110`,{
    //         headers:{
    //             "x-access-token":localStorage.getItem("x-access-token")
    //         }
    //     })
    //     .then((response)=>{
    //         setListaBoletim(response.data)
    //         setExibeBoletimList(true)
    //         setExibeBoletim(false)
    //     }).catch(function (error) {
    //         // manipula erros da requisição
    //         console.error(error);
    //         console.log('nao foi possivel localzar')
    //     })
    //     .then(function () {
    //         // sempre será executado
    //     });
    // }
    const handleClickNovoBoletim = ()=>{
        const newboletim = ({
            id:uuidv4(),
            envolvidos:[],
            materiaisApreendidos:[],
            efetivo:[],
        })
        setBoletim(newboletim)
        navigate('/header')
    }

    const handleClickVoltar = ()=>{
        navigate('/dashboard')
    }

    return ( 

    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(beta)"}/>
            
        <Container>
            <br/>
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

            {/* <Row className="justify-content-md-center">
                <Col md={6} sm={12} >
                    {(exibeBoletimList)?
                        <Table size="sm">
                            <thead>
                                <tr>
                                    
                                    <th>Natureza</th>
                                    <th>Data</th>
                                    <th>Número</th>
                                    <th>Opção</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {listaBoletim.map(boletim=><BoletimInformacoesList key={boletim.numero} boletim={boletim} setBoletim={setBoletim}/>)}
                            </tbody>
                        </Table>
                        :
                        ""
                    }
                </Col>
            </Row> */}
        </Container>

    </> );
}
 
export default DashboardBoletim;