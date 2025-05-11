import { TituloProvider } from "../Title/TitleContext"
import Titulo from "../Title/Titles"
import { CardProps } from "./TypeCards"




const Cards = ({ nome, bgColor, valoresProCard, valorFinal }: CardProps) => {

    // FILTROS PRA PEGAR O VALOR DE ENTRADA E SAIDA
    const ValorEntrada = valoresProCard.filter(
        entrada => entrada.tipo === 'entrada'
    )
    const ValorSaida = valoresProCard.filter(
        saida => saida.tipo === 'saida'
    )

    // REDUCE PRA JUNTAR TODOS OS VALORES DE ENTRADA OU SAIDA EM UMA VARIAVEL PRA CADA
    const totalEntrada = ValorEntrada.reduce((resultadoDaSoma, item) => resultadoDaSoma + item.valor, 0);
    const totalSaida = ValorSaida.reduce((resultadoDaSoma, item) => resultadoDaSoma + item.valor, 0);
    const saldo = totalEntrada - totalSaida;


    // CONDIÇAO PRA VALOR MOSTRADO SER DE ACORDO COM O CARD DA TELA
    let valorMostrado

    if (valorFinal === 'Entradas') {
        valorMostrado = totalEntrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } if (valorFinal === 'Saídas') {
        valorMostrado =totalSaida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } if (valorFinal === 'Saldo') {
        valorMostrado= saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }


    return (
        <div className={`${bgColor} rounded-[10px] py-[15px] px-[25px] xl:w-[270px] w-[270px] flex flex-col gap-[5px]`}>
            <TituloProvider value={{ className: 'xl:text-[18px] text-[22px]', nome }}>
                <Titulo />
            </TituloProvider>
            <p className="text-white text-[26px]">
               {valorMostrado}
            </p>
        </div>
    )
}

export default Cards