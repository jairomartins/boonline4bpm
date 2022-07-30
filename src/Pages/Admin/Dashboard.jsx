// Pagina que exibe todos os menus do sistema, de acordo com o nível do usuário
//
//
//

import axios from "axios";
import React, {useState} from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormBuscarBo from "../../components/Form/FormBuscarBo";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";

const Dashboard = () => {
            
    const [showMessagemErro, setshowMessagemErro] = useState(false);

    const [boletim, setBoletim] = useState()

    const [idBusca, setIdBusca] = useState('')



    // faz requisição GET que verifica se o boletim esta cadastrado no banco de dados
    // se encontrar usa o objeto de retorno para setar o boletim e exibir detalhes
    //
    //
    const checkBoletim = async () =>{
        axios.get(`http://127.0.0.1:3001/adm/listByID/${idBusca}`)
        .then((response)=>{
            setshowMessagemErro(false)
            setBoletim(response.data[0])
            console.log(boletim.data)
        }).catch(function (error) {
            // manipula erros da requisição
           
            console.error(error);
            console.log('nao foi possivel localzar')
            if(error){
                setshowMessagemErro(true)
            }
            
        })
        .then(function () {
            // sempre será executado
        });
    }


    return ( 

    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(beta)"}/>
            
        <Container>
            <br/>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <FormBuscarBo setIdBusca={setIdBusca} checkBoletim={checkBoletim}/>
                </Col>
            </Row>
            <hr/>
            <Row className="justify-content-md-center">
                <Col md={6}>

                    {(showMessagemErro && !boletim)?<Alert variant="danger">
                        Boletim não encontrado !
                    </Alert>:
                    <BoletimInformacoes boletim={boletim}/>
                    }
                </Col>
            </Row>
        </Container>

    </> );
}
 
export default Dashboard;