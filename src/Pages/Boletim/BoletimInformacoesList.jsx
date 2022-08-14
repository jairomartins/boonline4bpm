import axios from "axios";
import {Alert, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const BoletimInformacoesList = ({boletim, setBoletim}) => {

    const CarregarBoletim = async (numero)=>{
      
        axios.get(`http://192.168.0.100:433/adm/listByNumero/${numero}`)
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
   
                <tr>
                    <td>{boletim.natureza}</td>
                    <td>{boletim.data}</td>
                    <td>{boletim.numero}</td>
                    <td><Button variant="warning" onClick={(e)=>CarregarBoletim(boletim.numero)}><Link to={"/BoFromBD"}>Detalhe</Link></Button></td>
                </tr>
        
        }
        </>
     );
}

export default BoletimInformacoesList;