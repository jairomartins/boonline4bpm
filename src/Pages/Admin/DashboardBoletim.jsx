
import axios from "axios";
import React, {useState} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { VscNewFile } from 'react-icons/vsc';
import { Link } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormBuscarBo from "../../components/Form/FormBuscarBo";
import BoletimInformacoes from "../Boletim/BoletimInformacoes";

const DashboardBoletim = ({boletim, setBoletim}) => {
            
    const [exibeBoletim, setExibeBoletim] = useState(false);

    // const [boletim, setBoletim] = useState({})

    const [idBusca, setIdBusca] = useState('')



    // faz requisição GET que verifica se o boletim esta cadastrado no banco de dados
    // se encontrar usa o objeto de retorno para setar o boletim e exibir detalhes
    //
    //
    const buscarBoletim = async () =>{
        axios.get(`http://192.168.0.100:433/adm/listByNumero/${idBusca}`,{
            headers:{
                "x-access-token":"eysJhbGciOiJIUzI1NiJ9.amFpcm83bWFydGluc0BnbWFpbC5jb20.4f3MfxnBQNBG_mCPpESW7zQOn-zALpR9f2dXAlW_JyI"
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
                <br/>
                <Col md={6} className="text-center">
                    <Link to={"/header"}>
                        <Button variant="success"> Novo Boletim <VscNewFile/>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>

    </> );
}
 
export default DashboardBoletim;