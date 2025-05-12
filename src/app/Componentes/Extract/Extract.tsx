import Image from "next/image"
import { ExtractProps } from "./TypeExtract"



const Extract = ({ Titulo, Valor, Data, corLancamento, aoDeletar }: ExtractProps) => {
    return (

        <ul className="xl:grid xl:grid-cols-7 flex flex-col border-[1px] xl:px-[20px] px-[10px] rounded-[5px] py-[10px]
         border-cinza xl:text-[17px] text-[22px] xl:w-[524px] w-[300px] place-items-center xl:gap-0 gap-[5px]">
            <li className="text-white xl:place-self-start xl:col-span-2 xl:mb-0 mb-[8px]">
                {Titulo}
            </li>

            <li className={`${corLancamento} xl:col-span-2`}>
                {Valor}
            </li>
            <li className="text-white xl:place-self-end xl:col-span-2">
                {Data}
            </li>

            <button 
            onClick={() => aoDeletar(Titulo)} 
            className="cursor-pointer hover:opacity-50 xl:place-self-end xl:static absolute right-35">
                <Image width={20} height={20} src="/images/close.png" alt="botao de deletar" />
            </button>
        </ul>

    )
}

export default Extract