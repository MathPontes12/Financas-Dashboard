'use client';

import { useState } from "react";
import Extract from "./Componentes/Extract/Extract";
import Form from "./Componentes/Formulario/Form";
import { TituloProvider } from "./Componentes/Title/TitleContext";
import Titulo from "./Componentes/Title/Titles";
import { lancamentosProps } from "./TypePage";
import Cards from "./Componentes/Cards/Cards";


const Home = () => {

  // ESTADO PARA CONTROLE DO LANÇAMENTO ADICIONADO
  const [lancamentos, setLancamentos] = useState<lancamentosProps[]>([])

  // ESTADOS PARA CONTROLE DO VALORES DENTRO DO LANÇAMENTO ADICIONADO
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novoValor, setNovoValor] = useState('')
  const [novaData, setNovaData] = useState('')
  const [novoTipo, setNovoTipo] = useState('')


  // FUNÇAO DISPARADA NO CLIQUE DO BOTAO ADICIONAR
  const AoAdicionar = () => {

    if (novoTitulo !== '') {

      // ADICIONA A COR DO TEXTO E PASSA PRA VARIAVEL COR 
      const cor = novoTipo === 'entrada' ? 'text-green-500' : novoTipo === 'saida' ? 'text-red-700' : '';

      // ATRIBUIÇAO NAS VARIAVEIS OS NOVOS VALORES PREENCHIDOS
      const novoLancamento = {
        nome: novoTitulo,
        valor: Number(novoValor),
        data: novaData,
        tipo: novoTipo,
        corLancamento: cor
      };

      // ADICIONA NA LISTA LANCAMENTOS O NOVOLANCAMENTOS JUNTO COM OS VALORES LANCAMENTOS ANTERIORES (...lancamentos)

      setLancamentos([...lancamentos, novoLancamento]);

      // ZERA OS CAMPOS PRA NOVO PREENCHIMENTO
      setNovoTitulo('');
      setNovoValor('');
      setNovaData('');
      setNovoTipo('');
    }

  }


  return (
    <section className="bg-black flex flex-col
      my-[40px] py-[10px] px-[30px] rounded-[20px] gap-[10px] xl:items-start items-center">

      <TituloProvider value={{ className: "text-[40px]", nome: "Finanças" }}>
        <Titulo />
      </TituloProvider>

      <hr className="h-[2px] w-full bg-cinza" />

      <main className="flex xl:flex-row flex-col pb-[20px] gap-[40px] w-full ">

        <Form
          AoAdicionar={AoAdicionar}
          novoTitulo={novoTitulo}
          setNovoTitulo={(evento) => setNovoTitulo(evento.target.value)}
          novaData={novaData}
          setNovaData={(evento) => setNovaData(evento.target.value)}
          novoTipo={novoTipo}
          setNovoTipo={(evento) => setNovoTipo(evento.target.value)}
          novoValor={novoValor}
          setNovoValor={(evento) => setNovoValor(evento.target.value)}

        />

        <div className="flex flex-col gap-[20px] mt-[20px] xl:w-full w-fit place-self-center">
          <Cards bgColor="bg-green-900" nome="Entradas" valoresProCard={lancamentos} valorFinal="Entradas" />
          <Cards bgColor="bg-red-950" nome="Saídas" valoresProCard={lancamentos} valorFinal="Saídas" />
          <Cards bgColor="bg-gray-800" nome="Saldo" valoresProCard={lancamentos} valorFinal="Saldo" />
        </div>
      </main>

      <hr className="h-[2px] w-full bg-cinza" />

      <ul className="mt-[20px] flex flex-col items-center">

        {lancamentos.map((lancamento, index) => {
          return (
            <li key={index}>
              <Extract
                Titulo={lancamento.nome}
                //TROCA O ESTILO DE REPRESENTAÇÃO DE DINHEIRO PRO FORMATO DO BRASIL (R$ e ,)
                Valor={lancamento.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                // TROCA A DATA PRO FORMATO BRASILEIRO
                Data={new Date(lancamento.data).toLocaleDateString('pt-BR')}
                corLancamento={lancamento.corLancamento} />
            </li>
          )
        })}
      </ul>

    </section>
  );


}

export default Home