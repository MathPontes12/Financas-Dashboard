import { ExtractProps } from "./TypeExtract"



const Extract = ({ Titulo, Valor, Data, corLancamento }: ExtractProps) => {
    return (

        <ul className="flex border-[1px] rounded-[5px] px-[40px] py-[10px]
         border-cinza text-[17px] xl:gap-[200px] gap-[10px] w-fit justify-between">
            <li className="text-white">
                {Titulo}
            </li>
            <div className="flex xl:gap-[80px]">
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