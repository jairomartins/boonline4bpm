import React from "react";



import { createContext, useState } from "react";

const Context = createContext()


function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //
    const BASE_URL ="177.153.59.153"//URL DO SERVIDOR 

    return(<>
        <Context.Provider value={{authenticated, setAuthenticated, BASE_URL}}>
            {children}
        </Context.Provider>
    </>)

}

export {Context, AuthProvider}