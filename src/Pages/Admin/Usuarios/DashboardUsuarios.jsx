import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormBuscarUsuario from "../../../components/Form/FormBuscarUsuario";
import axios from "axios";
import CadastroUsuario from "./CadastroUsuario";
import TabelaUsuarios from "./TabelaUsuarios";

const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL


const DashboardUsuarios = () => {

    const [usuarioList, setUsuarioList] = useState([])
    const [exibeFormCadastro, setExibeFormCadastro] = useState(false)

    const handleClickBuscarUsuarios = ()=>{
        setExibeFormCadastro(false)
        axios.get(`https://${BASE_URL}:${API_PORT}/users`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            console.log(response.data)
            setUsuarioList(response.data)
        }).catch(function (error) {
            console.error(error)
        })
        .then(function () {
            // sempre será executado
        });
    }

    const handleClickEditarUsuario = ()=>{
        console.log("Editando ...")
    }

    const handleClickRemoverUsuario = ()=>{
        console.log("Removendo ...")
    }

    const handleClickRegistrarUsuarios = ()=>{
        setUsuarioList([])
        setExibeFormCadastro(true)
    }

    return ( 
    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>

        <Container>
        
           <h1>Gerenciamento de Usuários</h1>
           <FormBuscarUsuario us/>

           <ButtonGroup className="mt-2 mb-2">
                <Button onClick={handleClickBuscarUsuarios}>
                    Carregar Usuários ...
                </Button>
                <Button variant="warning" onClick={handleClickRegistrarUsuarios}>
                    Cadastrar Usuário +
                </Button>
           </ButtonGroup>
           <Row>
                <Col>
                    <TabelaUsuarios usuarioList={usuarioList} handleClickEditarUsuario={handleClickEditarUsuario} handleClickRemoverUsuario={handleClickRemoverUsuario}/>
                </Col>
           </Row>
            { 
                exibeFormCadastro?  <CadastroUsuario/> :""
            
            }
            
        </Container>

    </> );
}
 
export default DashboardUsuarios;