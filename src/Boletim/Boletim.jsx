import React, {useContext} from "react";

import {BrowserRouter,Routes,Route,} from "react-router-dom";

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
import DashboardUsuario from "../Pages/Admin/DashboardUsuario"
import BoletimDetalheFromBD from "../Pages/Boletim/BoletimDetalheFromBD";
import EmailVerify from "../Pages/Usuarios/EmailVerify";
import PasswordRecover from "../Pages/Usuarios/PasswordRecover";
import Links from "../Pages/Links/Links";
import DashboardBoletimp3 from "../Pages/Admin/DashboardBoletimp3";
import DashboardUsuarios from "../Pages/Admin/Usuarios/DashboardUsuarios";
import DashboardOcorrencias from "../Pages/Admin/Ocorrencias/DashboardOcorrencias";



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
                                element={authenticated ? (<Header cidadeLogin={cidade}/>):(<Home/>)} 
                            />

                            <Route path="envolvido" 
                                element={authenticated ? (<Envolvidos/>):(<Home/>)} 
                            />
                            
                            <Route path="material" 
                                element={ authenticated ? <ItensApreendidos/>:<Home/>} 
                                />
                            
                            <Route path="efetivo" 
                                element={authenticated ? <Efetivo/>:<Home/>} 
                                />
                            
                            <Route path="historico" 
                                element={authenticated  ? <Historico/>:<Home/>} 
                                />
                            
                            <Route path="VerBoletim" 
                                element={authenticated ? <BoletimDetalhe/>:<Home/>}
                            />
                            
                        </Route>
                        <Route path="/administrador">
                            <Route path="usuarios" 
                                element={authenticated ? (<DashboardUsuarios/>):(<Home/>)} 
                            />
                            <Route path="ocorrencias" 
                                element={authenticated ? (<DashboardOcorrencias/>):(<Home/>)} 
                            />
                        </Route>
                        

                        
                        
                        <Route path="*" element={<Page404/>}/>

                        <Route path="/registro" element={<RegisterUser/>}/>
                        <Route path="/login" element={<LoginUser/>}/>
                        <Route path="/emailverify" element={<EmailVerify/>}/>
                        <Route path="/passwordrecover/:id" element={<PasswordRecover/>}/>


                        <Route path="/dashboard" element={authenticated ? <Dashboard/>:<Home/>}/>
                        <Route path="/dashboard/boletim" element={authenticated ? <DashboardBoletimp3 />:<Home/>}/>
                        <Route path="/dashboard/usuarios" element={authenticated ?<DashboardUsuario/>:<Home/>}/>
                        
                        {/* <Route path="adm/listaBoletim" element={<ListaBoletim/>}/> */}
                        <Route path="/BoFromBD"  element={<BoletimDetalheFromBD/>} />



                        <Route path="/links" element={<Links/>}/>
                    </Routes>
                </BrowserRouter>
            </BoletimProvider>

        </>
    )

}