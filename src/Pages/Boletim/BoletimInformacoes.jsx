import axios from "axios";
import {Alert, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimInformacoes = ({boletim, setBoletim}) => {

    const CarregarBoletim = async (numero)=>{
      
            axios.get(`http://192.168.0.100:3001/adm/listByNumero/${numero}`)
            .then(function (response) {
                setBoletim(response.data[0])
                console.log(response)
            })
    }

    return ( 
        <> 
        {(boletim===undefined)?
            <Alert variant="danger">
                Boletim não encontrado!
            </Alert>
        
        :
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
                <tr>
                    <td>{boletim.natureza}</td>
                    <td>{boletim.data}</td>
                    <td>{boletim.numero}</td>
                    <td><Button variant="warning" onClick={(e)=>CarregarBoletim(boletim.numero)}><Link to={"/adm/BoFromBD"}>Detalhe</Link></Button></td>
                </tr>
            </tbody>
            </Table>
        
        }
        </>
     );
}

export default BoletimInformacoes;