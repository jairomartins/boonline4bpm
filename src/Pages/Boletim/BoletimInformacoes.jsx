// import axios from "axios";
import {Alert, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimInformacoes = ({boletim, setBoletim}) => {

    const CarregarBoletim = async (numero)=>{
      
            // axios.get(`http://177.153.59.153:433/adm/listByNumero/${numero}`,{
            //     headers:{
            //         "x-access-token":localStorage.getItem("x-access-token")
            //     }
            // })
            // .then(function (response) {
            //     const bo = response.data
            //     console.log(bo)
            //     setBoletim(response.data[bo.length-1])
            //     console.log(response)
            // }).catch(function (error) {
            //     // manipula erros da requisição
            //     console.error(error);
            //     console.log('nao foi possivel localzar')
            // })
            // .then(function () {
            //     // sempre será executado
            // });
            console.log("bye")
    }

    return ( 
        <> 
        {(boletim==undefined)?
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
                    <td><Button variant="warning" onClick={(e)=>CarregarBoletim(boletim.numero)}><Link to={"/BoFromBD"}>Detalhe</Link></Button></td>
                </tr>
            </tbody>
            </Table>
        
        }
        </>
     );
}

export default BoletimInformacoes;