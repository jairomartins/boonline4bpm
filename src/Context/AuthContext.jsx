import React from "react";
import { createContext, useState } from "react";

console.log()

const Context = createContext()


function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //false = sem usuario logado
    const BASE_URL =process.env.REACT_APP_BASE_URL
    const [cidade, setCidade] = useState ('Balsas') //cidade de login
    return(<>
        <Context.Provider value={{authenticated, setAuthenticated, BASE_URL, cidade, setCidade}}>
            {children}
        </Context.Provider>
    </>)

}


export {Context, AuthProvider}