import React from "react";



import { createContext, useState } from "react";

const Context = createContext()


function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //
    const BASE_URL ="127.0.0.1"//URL DO SERVIDOR 177.153.59.153
    const [cidade, setCidade] = useState ('Balsas') //cidade de login
    return(<>
        <Context.Provider value={{authenticated, setAuthenticated, BASE_URL, cidade, setCidade}}>
            {children}
        </Context.Provider>
    </>)

}


export {Context, AuthProvider}