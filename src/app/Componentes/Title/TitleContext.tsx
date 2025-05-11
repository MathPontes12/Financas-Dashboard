'use client';
import { createContext } from "react";
import { TituloContextProps } from "./TypeTitle";



const TituloContext = createContext<TituloContextProps | undefined>(undefined)



interface TituloProviderProps {
    children: React.ReactNode;
    value: TituloContextProps;
  }
  
  const TituloProvider = ({ children, value }: TituloProviderProps) => {
    return (
      <TituloContext.Provider value={value}>
        {children}
      </TituloContext.Provider>
    );
  };

  export {TituloProvider, TituloContext}