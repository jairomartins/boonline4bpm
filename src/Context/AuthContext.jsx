import React from "react";
import { createContext, useState } from "react";

const Context = createContext()

function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false)

     async function  handleLogin(userEmail, userPassword){
        
        setAuthenticated(false)

        console.log(userEmail+' - '+userPassword)
     }  


    return(<>
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    </>)

}

export {Context, AuthProvider}