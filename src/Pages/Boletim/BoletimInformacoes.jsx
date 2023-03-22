import {Alert, Button,  Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimInformacoes = ({boletim, setBoletim}) => {

    const usuarioLogadoID = localStorage.getItem("x-user-mat-id")

    const boletimDoUsuario = boletim?.efetivo.find(efetivo =>efetivo.id === usuarioLogadoID)// verifica se o usuario logado esta no boletim

    return ( 
        <> 
        {(boletim===null)?
            <Alert variant="danger">
                Boletim não encontrado!!
            </Alert>
        
        :
        <Table size="sm">
            <thead>
                <tr>
                    
                    <th>Natureza</th>
                    <th>Data</th>
                    <th>Número</th>
                    <th>Município</th>
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{boletim.natureza}</td>
                    <td>{boletim.data}</td>
                    <td>{boletim.numero}</td>
                    <td>{boletim.municipio}</td>
                    <td><Button variant="warning"><Link to={"/BoFromBD"}>Detalhe</Link></Button> <br/>
                    <br/>

                    { boletimDoUsuario!=null?
                    (<Button  variant="danger"><Link to={"/boletim/header"}>Editar</Link></Button>)
                    :
                    ("")
                    }
                    </td>
                </tr>
            </tbody>
            </Table>
        
        }
        </>
     );
}

export default BoletimInformacoes;