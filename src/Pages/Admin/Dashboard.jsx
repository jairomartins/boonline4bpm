// Pagina que exibe todos os menus do sistema, de acordo com o nível do usuário
// Menu de Boletins: Registrar boletim -  Buscar Boletins - Apagar Boletim - Editar Boletim
// Menu de Usuarios: Registar usuario - Buscar usuario - Apagar Usuario - Editar Usuario 
// Menu de Estatísticas - Futuramente 

import React, { useContext }  from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

import { ImFileText } from "react-icons/im";
import {BiAddToQueue, BiCollection, BiUserCircle} from "react-icons/bi"
import {GiExitDoor} from "react-icons/gi"

import Cabecalho from "../../components/Cabecalho/Cabecalho";

import { Context } from "../../Context/AuthContext";

const Dashboard = () => {

    const {setAuthenticated} = useContext(Context)

    const navigate = useNavigate()

    const handleClickBoletim = ()=>{
        navigate('boletim')
    }

    const handleClickPerfil = ()=>{
        navigate('/perfil')
    }

    const handleClickTCO = ()=>{
        navigate('/links')
    }
    const handleClickGerenciarUsuarios =()=>{
        navigate("/administrador/usuarios")
    }

    const handleClickSair = () => {
        // Limpar os dados de autenticação armazenados
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("x-user-mat-id");
        // Atualizar o estado de autenticação para falso
        setAuthenticated(false);
      };

    return ( 
    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>

        <Container>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    {/* <Link to={"boletim"}> */}
                        <Button onClick={handleClickBoletim} className="mt-2">Boletins <ImFileText/>
                        </Button>
                    {/* </Link> */}
                </Col>
                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    {/* <Link to={"usuarios"}> */}
                        <Button onClick={handleClickPerfil} className="mt-2">Meu Perfil <BiUserCircle/>
                        </Button>
                    {/* </Link> */}
                </Col>

                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    {/* <Link to={"/links"}> */}
                        <Button onClick={handleClickTCO} variant="warning" className="mt-2">
                            TCO-PMMA - Arquivos<BiCollection/>
                        </Button>
                    {/* </Link> */}
                </Col>

                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    {/* <Link to={"/links"}> */}
                        <Button onClick={handleClickGerenciarUsuarios} variant="warning" className="mt-2">
                            Gerenciamento de Usuários <BiAddToQueue/>
                        </Button>
                    {/* </Link> */}
                </Col>
                
            </Row>

            <Row>
            <Col className="justify-content-md-center d-grid gap-2">
                    
                        <Button onClick={handleClickSair} className="mt-2">Sair<GiExitDoor/></Button>

                </Col>
            </Row>

        </Container>

    </> );
}
 
export default Dashboard;