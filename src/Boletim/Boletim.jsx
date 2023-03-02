import React, {useContext} from "react";




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
import { BoletimProvider } from "../Context/BoletimContext";

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
import Dashboard from "../Pages/Admin/Dashboard";
import DashboardBoletim from "../Pages/Admin/DashboardBoletim";
import DashboardUsuario from "../Pages/Admin/DashboardUsuario";
import BoletimDetalheFromBD from "../Pages/Boletim/BoletimDetalheFromBD";



export default function Boletim(){ 
   
    const {authenticated, cidade} = useContext(Context);
 

    return (
        <>
            <BoletimProvider>
                <BrowserRouter>
                {/* {authenticated && <Navigate replace to="/home"/>} */}
                    <Routes>
                    

                        <Route path="/" 
                            element={<Home/>}
                        />

                        <Route path="/boletim">
                            <Route path="header" 
                                element={authenticated ? (<Header cidadeLogin={cidade}/>):(<LoginUser/>)} 
                            />

                            <Route path="envolvido" 
                                element={authenticated ? (<Envolvidos/>):(<LoginUser/>)} 
                            />
                            
                            <Route path="material" 
                                element={ authenticated ? <ItensApreendidos/>:<LoginUser/>} 
                                />
                            
                            <Route path="efetivo" 
                                element={authenticated ? <Efetivo/>:<LoginUser/>} 
                                />
                            
                            <Route path="historico" 
                                element={authenticated  ? <Historico/>:<LoginUser/>} 
                                />
                            
                            <Route path="VerBoletim" 
                                element={authenticated ? <BoletimDetalhe/>:<LoginUser/>}
                            />
                            
                        </Route>
                        

                        
                        
                        <Route path="*" element={<Page404/>}/>

                        <Route path="/registro" element={<RegisterUser/>}/>
                        <Route path="/login" element={<LoginUser/>}/>


                        <Route path="/dashboard" element={authenticated ? <Dashboard/>:<Home/>}/>
                        <Route path="/dashboard/boletim" element={authenticated ? <DashboardBoletim />:<LoginUser/>}/>
                        <Route path="/dashboard/usuarios" element={authenticated ?<DashboardUsuario/>:<LoginUser/>}/>
                        
                        {/* <Route path="adm/listaBoletim" element={<ListaBoletim/>}/> */}
                        <Route path="/BoFromBD"  element={<BoletimDetalheFromBD/>} />
                    </Routes>
                </BrowserRouter>
            </BoletimProvider>

        </>
    )

}