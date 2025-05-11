'use client';

import { TituloProvider } from "../Title/TitleContext"
import Titulo from "../Title/Titles"
import FormFormat from "./FormFormat"
import { FormProps } from "./TypeForm";


const Form = ({ AoAdicionar, novoTipo, novoTitulo, novoValor, novaData, setNovoTitulo, setNovoValor, setNovoTipo, setNovaData }: FormProps) => {
  return (

    <form onSubmit={(evento) => {evento.preventDefault(); AoAdicionar();}} 
    className="flex flex-col gap-[20px] w-fit xl:place-self-start place-self-center">
      <TituloProvider value={{ className: "text-[22px]", nome: "Adicionar Transação" }}>
        <Titulo />
      </TituloProvider>

      <FormFormat nome="Título">
        <input required className="text-[white] justify-center border-[1px] border-cinza rounded-[10px] p-[5px]"
          type="text" placeholder="Insira um nome" value={novoTitulo} onChange={setNovoTitulo} />
      </FormFormat>

      <FormFormat nome="Valor">
        <span className="absolute mt-[32px] ml-[8px] text-gray-400">R$</span>
        <input required className="text-[white] pl-[34px] border-[1px] border-cinza rounded-[10px] p-[5px]"
          type="number" step="0.01" placeholder="Insira um valor" value={novoValor} onChange={setNovoValor} />
      </FormFormat>

      <FormFormat nome="Tipo">
        <select required value={novoTipo} onChange={setNovoTipo}
          className="text-[white] border-[1px] border-cinza rounded-[10px] p-[5px] cursor-pointer">
          <option value="" disabled>Selecione</option>
          <option value="entrada" className="bg-[black]">Entrada</option>
          <option value="saida" className="bg-[black]">Saída</option>
        </select>
      </FormFormat>

      <FormFormat nome="Data">
        <input required className="text-[white] border-[1px] border-cinza rounded-[10px] py-[5px] w-fit pl-[40px]"
          type="date" value={novaData} onChange={setNovaData} />
      </FormFormat>

      <button type="submit" className="bg-blue-500 text-white rounded-[10px] py-[7px] text-[15px] focus:scale-95 cursor-pointer">
        Adicionar
      </button>
    </form>

  )
}

export default Form