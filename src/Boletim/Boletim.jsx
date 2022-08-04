import React, {useState, useContext} from "react";


import { v4 as uuidv4 } from "uuid";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

//
//
//
//
import { Context } from "../Context/AuthContext";

import Home from "../Home/home"
import Header from "../components/Header/Header"
import Envolvidos from "../components/Envolvido/Envolvidos"
import ItensApreendidos from "../components/Material/ItensApreendidos"
import Efetivo from "../components/Efetivo/Efetivo"
import Historico from "../components/Historico/Historico"
import BoletimDetalhe from "../components/BoletimDetalhe/BoletimDetalhe"
import Page404 from "../components/Page404"
import RegisterUser from "../Pages/Usuarios/RegisterUser";
import LoginUser from "../Pages/Usuarios/LoginUser";

// import ListaBoletim from "../Pages/Boletim/ListaBoletim";
// import Dashboard from "../Pages/Admin/Dashboard";
// import DashboardBoletim from "../Pages/Admin/DashboardBoletim";
// import DashboardUsuario from "../Pages/Admin/DashboardUsuario";



export default function Boletim(){ 
   
    const {authenticated} = useContext(Context);

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
                
                    <Route path="/" 
                        element={<Home/>}
                    />
                    <Route path="/header" 
                        element={authenticated ? (<Header boletim={boletim} setBoletim={setBoletim}/>):(<LoginUser/>)} 
                    />

                    <Route path="/envolvido" 
                        element={authenticated ? (<Envolvidos boletim={boletim} setBoletim={setBoletim}/>):(<LoginUser/>)} 
                    />
                    
                    <Route path="/material" 
                        element={ authenticated ? <ItensApreendidos boletim={boletim} setBoletim={setBoletim}/>:<LoginUser/>} />
                    
                    <Route path="/efetivo" 
                        element={authenticated ? <Efetivo boletim={boletim} setBoletim={setBoletim}/>:<LoginUser/>} />
                    
                    <Route path="/historico" 
                        element={authenticated  ? <Historico boletim={boletim} setBoletim={setBoletim}/>:<LoginUser/>} />
                    
                    <Route path="/VerBoletim" 
                        element={authenticated ? <BoletimDetalhe boletim={boletim}/>:<LoginUser/>}/>
                    
                    
                    <Route path="*" element={<Page404/>}/>

                    <Route path="/registro" element={<RegisterUser/>}/>
                    <Route path="/login" element={<LoginUser/>}/>


                    {/* <Route path="adm/dashboard" element={<Dashboard/>}/>
                    <Route path="adm/dashboard/boletim" element={<DashboardBoletim boletim={boletim} setBoletim={setBoletim}/>}/>
                    <Route path="adm/dashboard/usuarios" element={<DashboardUsuario/>}/> */}
                    
                    {/* <Route path="adm/listaBoletim" element={<ListaBoletim/>}/>
                    <Route path="/adm/BoFromBD" element={<BoletimDetalhe boletim={boletim} setBoletim={setBoletim}/>}/> */}
                </Routes>
            </BrowserRouter>

        </>
    )

}