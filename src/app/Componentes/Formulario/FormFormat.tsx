'use client';

import Titulo from "../Title/Titles";
import { TituloProvider } from "../Title/TitleContext";
import { FormFormatProps } from "./TypeForm";



const FormFormat = ({ nome, children }: FormFormatProps) => {


    return (
        <div className="flex flex-col gap-[5px]">

            <TituloProvider value={{ className: "xl:text-[15px] text-[20px] opacity-50", nome }}>
                <Titulo />
            </TituloProvider>

            {children}


        </div>
    )
}

export default FormFormat