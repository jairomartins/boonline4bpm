import React, {useState} from "react";

import { v4 as uuidv4 } from "uuid";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";



import Home from "../Home/home"
import Header from "../components/Header/Header";
import Envolvidos from "../components/Envolvido/Envolvidos"
import ItensApreendidos from "../components/Material/ItensApreendidos";
import Efetivo from "../components/Efetivo/Efetivo"
import Historico from "../components/Historico/Historico";
import BoletimDetalhe from "../components/BoletimDetalhe/BoletimDetalhe"




export default function Boletim(){ 
   
    const [boletim, setBoletim] = useState({
        id:uuidv4(),
        envolvidos:[],
        materiaisApreendidos:[],
        efetivo:[],
        historico:[]
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/header" element={<Header boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/envolvido" element={<Envolvidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/material" element={<ItensApreendidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/efetivo" element={<Efetivo boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/historico" element={<Historico boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/resumo" element={<BoletimDetalhe boletim={boletim}/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )

}