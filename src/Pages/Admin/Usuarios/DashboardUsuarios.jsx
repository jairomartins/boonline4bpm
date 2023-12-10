import React, { useState } from "react";
import { Button, ButtonGroup, Container, Row, Table} from "react-bootstrap";
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormBuscarUsuario from "../../../components/Form/FormBuscarUsuario";
import axios from "axios";

const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL


const DashboardUsuarios = () => {

    const [usuarioList, setUsuarioList] = useState([])


    const handleClickBuscarUsuarios = ()=>{
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

    return ( 
    <>
        <Cabecalho texto={"Gerenciador de Boletins Digitais: versão(2022.1)"}/>

        <Container>
        
           <h1>Gerenciamento de Usuários</h1>
            <FormBuscarUsuario us/>
           <p>Lista de Usuários Cadastrados </p>
           <ButtonGroup>
                <Button onClick={handleClickBuscarUsuarios}>
                    Carregar Usuários ...
                </Button>
                <Button variant="warning" onClick={handleClickBuscarUsuarios}>
                    Cadastrar Usuário +
                </Button>
           </ButtonGroup>
           <Row>
           <Table>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Tipo de Usuário</th>
                    <th>Mat/ID</th>
                    <th>Opção</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            usuarioList?.map((usuario)=>
                            <tr key={usuario.id}>
                                <td>{usuario.userName} </td>
                                <td>{usuario.userEmail}</td>
                                <td>{usuario.tipo}</td>
                                <td>{usuario.userMatriculaId}</td>
                                <td>
                                    <a href="#/">Excluir </a>
                                    <a href="#/"> Editar</a>
                                </td>
                            </tr>
                            )
                        }
                    
                </tbody>
            </Table>
           </Row>
           
        </Container>

    </> );
}
 
export default DashboardUsuarios;