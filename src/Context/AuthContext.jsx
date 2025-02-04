import React from "react";
import { createContext, useState } from "react";

console.log()

const Context = createContext()


function AuthProvider({children}){
    const BASE_URL =process.env.REACT_APP_BASE_URL

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //false = sem usuario logado
    const [municipio, setMunicipio] = useState(localStorage.getItem("x-user-municipio") || "Balsas");

    return(<>
        <Context.Provider value={{authenticated, setAuthenticated, BASE_URL, municipio, setMunicipio}}>
            {children}
        </Context.Provider>
    </>)

}


export {Context, AuthProvider}