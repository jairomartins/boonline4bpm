import React, {useState, useContext} from "react";


import { v4 as uuidv4 } from "uuid";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";



import Home from "../Home/home"
import Header from "../components/Header/Header"
import Envolvidos from "../components/Envolvido/Envolvidos"
import ItensApreendidos from "../components/Material/ItensApreendidos"
import Efetivo from "../components/Efetivo/Efetivo"
import Historico from "../components/Historico/Historico"
import BoletimDetalhe from "../components/BoletimDetalhe/BoletimDetalhe"
import Page404 from "../components/Page404"
import RegisterUser from "../components/User/RegisterUser";
import LoginUser from "../components/User/LoginUser";

import { Context } from "../Context/AuthContext";



export default function Boletim(){ 
   
    // const {authenticated} = useContext(Context);

    const [boletim, setBoletim] = useState({
        id:uuidv4(),
        envolvidos:[],
        materiaisApreendidos:[],
        efetivo:[],
    })

    return (
        <>
            
            <BrowserRouter>
            {/* {authenticated && <Navigate replace to="/home"/>} */}
                <Routes>
                
                    {/* <Route path="/" 
                        element={authenticated ? (<Home/>):(<LoginUser/>)}
                    />
                    <Route path="/header" 
                        element={authenticated ? (<Header boletim={boletim} setBoletim={setBoletim}/>):(<LoginUser/>)} 
                    /> */}
                    <Route path="/" 
                        element={<Home/>}
                    />
                    <Route path="/header" 
                        element={<Header boletim={boletim} setBoletim={setBoletim}/>} 
                    />
                    <Route path="/envolvido" element={<Envolvidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/material" element={<ItensApreendidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/efetivo" element={<Efetivo boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/historico" element={<Historico boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/VerBoletim" element={<BoletimDetalhe boletim={boletim}/>}/>
                    <Route path="*" element={<Page404/>}/>
                    <Route path="adm/registro" element={<RegisterUser/>}/>
                    <Route path="adm/login" element={<LoginUser/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )

}