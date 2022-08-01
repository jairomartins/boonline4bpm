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
import RegisterUser from "../Pages/Usuarios/RegisterUser";
import LoginUser from "../Pages/Usuarios/LoginUser";

import BoletimDetalheFromBD from "../Pages/Boletim/BoletimDetalheFromBD"

import { Context } from "../Context/AuthContext";
import ListaBoletim from "../Pages/Boletim/ListaBoletim";
import Dashboard from "../Pages/Admin/Dashboard";
import DashboardBoletim from "../Pages/Admin/DashboardBoletim";
import DashboardUsuario from "../Pages/Admin/DashboardUsuario";



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
                        element={authenticated ? (<Home/>):(<LoginUser/>)}
                    />
                    <Route path="/header" 
                        element={authenticated ? (<Header boletim={boletim} setBoletim={setBoletim}/>):(<LoginUser/>)} 
                    />
                    {/* <Route path="/" 
                        element={<Home/>}
                    />
                    <Route path="/header" 
                        element={<Header boletim={boletim} setBoletim={setBoletim}/>} 
                    /> */}
                    <Route path="/envolvido" element={<Envolvidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/material" element={<ItensApreendidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/efetivo" element={<Efetivo boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/historico" element={<Historico boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/VerBoletim" element={<BoletimDetalhe boletim={boletim}/>}/>
                    <Route path="*" element={<Page404/>}/>

                    {/* Paginas do administrador*/}
                    <Route path="adm/registro" element={<RegisterUser/>}/>
                    <Route path="adm/login" element={<LoginUser/>}/>

                    <Route path="adm/dashboard" element={<Dashboard/>}/>
                    <Route path="adm/dashboard/boletim" element={<DashboardBoletim/>}/>
                    <Route path="adm/dashboard/usuarios" element={<DashboardUsuario/>}/>
                    
                    <Route path="adm/listaBoletim" element={<ListaBoletim/>}/>
                    <Route path="adm/listaByID" element={<BoletimDetalheFromBD/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )

}