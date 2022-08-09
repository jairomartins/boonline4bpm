import React from "react";



import { createContext, useState } from "react";

const Context = createContext()


function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //
    const [token, setToken] =  useState("") //

    return(<>
        <Context.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </Context.Provider>
    </>)

}

export {Context, AuthProvider}