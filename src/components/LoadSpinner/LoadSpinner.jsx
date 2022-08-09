import  React, { useState } from "react";
import { useEffect } from "react";


import load_gif from "./loading.gif"

import "./loading.css"

const LoadSpinner = (props) => {   
   
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(props.visible)
    }, [props.visible]);


    return ( 
        <>  {isVisible && "Carregando..."}
            {isVisible ?<img src={load_gif} alt="carregando ..." className="container-spinner"/> : ""}
        </> 
    );
}
 
export default LoadSpinner;