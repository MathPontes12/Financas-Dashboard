import { lancamentosProps } from "@/app/TypePage"


export interface CardProps {
    className: string
    nome: string
    bgColor: string
    valoresProCard: lancamentosProps[]
    valorFinal: string
}