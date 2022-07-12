import React from "react";
import './App.css';
import Boletim from './Boletim/Boletim';
import { AuthProvider } from "./Context/AuthContext";


function App() {
  return (
  <>
    {/* <AuthProvider> */}
      
      <Boletim/>

    {/* </AuthProvider> */}
        
    </>
  )
}

export default App;
