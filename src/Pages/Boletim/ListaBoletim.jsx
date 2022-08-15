import React,{useState, useEffect} from "react";

const axios = require('axios');

const ListaBoletim = () => {
    const [bos, setbos] = useState([]);
   
    
    // const carregarLista = ()=>{
    //     bos.map((bo)=>{<li>bo._id</li>})
    // }

    useEffect(() => {
        axios.get('http://177.153.59.153:433/listbo')
        .then(function (response) {
            setbos(response.data)
        })
    }, []);


    
    return ( <>
        
        
        {bos.map((bo)=><li key={bo._id}><a href={`http://177.153.59.153:433/listByID/${bo._id}`}>{bo._id}</a></li>)}

        <button>Atualizar</button>
    </> );
}
 
export default ListaBoletim;