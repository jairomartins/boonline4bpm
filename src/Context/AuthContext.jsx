import React from "react";
import { createContext, useState } from "react";

const Context = createContext()

const axios = require('axios');


function AuthProvider({children}){

    //usado para fazer a authenticação do login 
    const [authenticated, setAuthenticated] =  useState(false) //

     async function  handleLogin(userEmail, userPassword){
        
        axios.post("http://192.168.0.113:3001/auth/login",{
            userEmail: userEmail,
            userPassword: userPassword
    })
    .then(function (response) {
        // manipula o sucesso da requisição
        setAuthenticated(response.data.user)
        console.log(response.data.user);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
     }  


    return(<>
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    </>)

}

export {Context, AuthProvider}