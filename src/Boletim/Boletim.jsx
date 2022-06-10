import React, {useState} from "react";

// import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header/Header";
import Envolvidos from "../components/Envolvido/Envolvidos"

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from "../Home/home"

export default function Boletim(){ 
   
    const [boletim, setBoletim] = useState({
        envolvidos:[]
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/header" element={<Header boletim={boletim} setBoletim={setBoletim}/>} />
                    <Route path="/envolvido" element={<Envolvidos boletim={boletim} setBoletim={setBoletim}/>} />
                </Routes>
            </BrowserRouter>

        </>
    )

}