'use client';

import { TituloProvider } from "../Title/TitleContext"
import Titulo from "../Title/Titles"
import FormFormat from "./FormFormat"
import { FormProps } from "./TypeForm";


const Form = ({ AoAdicionar, novoTipo, novoTitulo, novoValor, novaData, setNovoTitulo, setNovoValor, setNovoTipo, setNovaData }: FormProps) => {
  return (

    <form onSubmit={(evento) => {evento.preventDefault(); AoAdicionar();}} 
    className="flex flex-col gap-[20px] w-fit">
      <TituloProvider value={{ className: "text-[22px] place-self-center", nome: "Adicionar Transação" }}>
        <Titulo />
      </TituloProvider>

      <FormFormat nome="Título">
        <input required className="text-[white] xl:text-[15px] text-[22px] justify-center border-[1px] border-cinza rounded-[10px] p-[5px]"
          type="text" placeholder="Insira um nome" value={novoTitulo} onChange={setNovoTitulo} />
      </FormFormat>

      <FormFormat nome="Valor">
        <span className="absolute xl:mt-[32px] mt-[39px] ml-[8px] text-gray-400 xl:text-[15px] text-[22px]">R$</span>
        <input required className="text-[white] xl:pl-[34px] pl-[40px] border-[1px] border-cinza rounded-[10px] p-[5px] xl:text-[15px] text-[22px]"
          type="number" step="0.01" placeholder="Insira um valor" value={novoValor} onChange={setNovoValor} />
      </FormFormat>

      <FormFormat nome="Tipo">
        <select required value={novoTipo} onChange={setNovoTipo}
          className="text-[white] border-[1px] border-cinza rounded-[10px] p-[5px] cursor-pointer xl:text-[15px] text-[22px]">
          <option value="" disabled>Selecione</option>
          <option value="entrada" className="bg-[black]">Entrada</option>
          <option value="saida" className="bg-[black]">Saída</option>
        </select>
      </FormFormat>

      <FormFormat nome="Data">
        <input required className="text-[white] border-[1px] border-cinza rounded-[10px] py-[5px] w-fit pl-[40px] xl:text-[15px] text-[22px]"
          type="date" value={novaData} onChange={setNovaData} />
      </FormFormat>

      <button type="submit" className="bg-blue-500 text-white rounded-[10px] py-[7px] focus:scale-95 cursor-pointer xl:text-[15px] text-[22px]">
        Adicionar
      </button>
    </form>

  )
}

export default Form