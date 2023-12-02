import axios from "axios";
import {Alert, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
const API_PORT = process.env.REACT_APP_API_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL
const BoletimInformacoesList = ({boletim, setBoletim}) => {

    const CarregarBoletim = async (numero)=>{
      
        axios.get(`https://${BASE_URL}:${API_PORT}/adm/boletim/search/${numero}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then(function (response) {
            setBoletim(response.data[0])
            console.log(response)
        }).catch(function(err){
            console.log(err)
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
                    <td>{boletim.cidade}</td>
                    <td><Button variant="warning" onClick={(e)=>CarregarBoletim(boletim.numero)}><Link to={"/BoFromBD"}>Detalhe</Link></Button></td>
                </tr>
        
        }
        </>
     );
}

export default BoletimInformacoesList;