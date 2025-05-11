import { ExtractProps } from "./TypeExtract"



const Extract = ({ Titulo, Valor, Data, corLancamento }: ExtractProps) => {
    return (
        
        <ul className="flex xl:flex-row flex-col border-[1px] rounded-[5px] xl:px-[40px] px-[10px] py-[10px]
         border-cinza xl:text-[17px] text-[22px] xl:gap-[200px] gap-[20px] xl:w-fit w-[300px] justify-between items-center">
            <li className="text-white">
                {Titulo}
            </li>
            <div className="flex xl:flex-row flex-col xl:gap-[80px] gap-[10px]">
                <li className={`${corLancamento}`}>
                    {Valor}
                </li>
                <li className="text-white">
                    {Data}
                </li>
            </div>
        </ul>

    )
}

export default Extract