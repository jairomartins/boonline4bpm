import React, {useState} from "react";

import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header/Header";
import Envolvidos from "../components/Envolvido/Envolvidos"

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from "../Home/home"
import ItensApreendidos from "../components/Material/ItensApreendidos";

export default function Boletim(){ 
   
    const [boletim, setBoletim] = useState({
        id:uuidv4(),
        envolvidos:[],
        materiaisApreendidos:[]
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/header" element={<Header boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/envolvido" element={<Envolvidos boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/material" element={<ItensApreendidos boletim={boletim} setBoletim={setBoletim}/>} />
                </Routes>
            </BrowserRouter>

        </>
    )

}