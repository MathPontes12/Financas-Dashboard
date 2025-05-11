'use client'

import React, { useContext } from "react";
import { TituloContext } from "./TitleContext";





const Titulo = () => {
    
    const { className, nome } = useContext(TituloContext)!;
    
    
    return(

        <h1 className={`text-white ${className}`}> {nome} </h1>

    )
}

export default Titulo