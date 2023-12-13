import React, { useState } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormBuscarUsuario from "../../../components/Form/FormBuscarUsuario";
import axios from "axios";
import CadastroUsuario from "./CadastroUsuario";
import TabelaUsuarios from "./TabelaUsuarios";
import { useNavigate } from "react-router-dom";
import { BiArrowBack, BiDownload, BiPlus } from "react-icons/bi";

const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL


const DashboardUsuarios = () => {

    const [usuarioList, setUsuarioList] = useState([])
    const [exibeFormCadastro, setExibeFormCadastro] = useState(false)

    const navigate = useNavigate()    

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

    const handleClickVoltar = ()=>{
        navigate("/dashboard")
    }

    return ( 
    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>

        <Container>
        
           <h1>Gerenciamento de Usuários</h1>
           <FormBuscarUsuario />
            <Row>
                <Col className="d-grid gap-2 d-md-block mt-2 mb-2">
                    <Button size="sm" variant="warning" onClick={handleClickBuscarUsuarios}>
                        Carregar Usuários <BiDownload/>
                    </Button>
                    {" "}
                    <Button size="sm"  variant="success" onClick={handleClickRegistrarUsuarios}>
                        Cadastrar Usuário <BiPlus/>
                    </Button>
                    {" "}
                    <Button size="sm"  variant="outline-primary" onClick={handleClickVoltar}>
                        Voltar <BiArrowBack/>
                    </Button>
                </Col>
            </Row>
           <Row >
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