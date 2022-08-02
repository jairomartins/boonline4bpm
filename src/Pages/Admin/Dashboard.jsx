// Pagina que exibe todos os menus do sistema, de acordo com o nível do usuário
// Menu de Boletins: Registrar boletim -  Buscar Boletins - Apagar Boletim - Editar Boletim
// Menu de Usuarios: Registar usuario - Buscar usuario - Apagar Usuario - Editar Usuario 
// Menu de Estatísticas - Futuramente 

import React  from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import icons
//
//
//

import { ImFileText } from "react-icons/im";
import {BiUserCircle} from "react-icons/bi"


import Cabecalho from "../../components/Cabecalho/Cabecalho";

const Dashboard = () => {

    return ( 
    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>

        <Container>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    <Link to={"boletim"}>
                        <Button className="mt-2">Boletim <ImFileText/>
                        </Button>
                    </Link>
                </Col>
                <Col sm={3} md={3} className="justify-content-md-center d-grid gap-2">
                    <Link to={"usuarios"}>
                        <Button className="mt-2">Usuarios <BiUserCircle/>
                        </Button>
                    </Link>
                </Col>
            </Row>

        </Container>

    </> );
}
 
export default Dashboard;