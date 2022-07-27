import React,{useState, useEffect} from "react";

const axios = require('axios');

const ListaBoletim = () => {
    const [bos, setbos] = useState([]);
   
    
    // const carregarLista = ()=>{
    //     bos.map((bo)=>{<li>bo._id</li>})
    // }

    useEffect(() => {
        axios.get('http://192.168.0.100:3001/listbo')
        .then(function (response) {
            setbos(response.data)
        })
    }, []);


    
    return ( <>
        
        
        {bos.map((bo)=><li key={bo._id}><a href={`http://localhost:3001/listByID/${bo._id}`}>{bo._id}</a></li>)}

        <button>Atualizar</button>
    </> );
}
 
export default ListaBoletim;