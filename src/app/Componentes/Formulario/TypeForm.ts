import { ReactNode } from "react";

export interface FormFormatProps {
    nome: string;
    children: ReactNode;
}

export interface FormProps {
    AoAdicionar: () => void
    novoTitulo: string
    setNovoTitulo: (evento: React.ChangeEvent<HTMLInputElement>) => void;
    novoValor: string
    setNovoValor: (evento: React.ChangeEvent<HTMLInputElement>) => void;
    novoTipo: string
    setNovoTipo: (evento: React.ChangeEvent<HTMLSelectElement>) => void;
    novaData: string
    setNovaData: (evento: React.ChangeEvent<HTMLInputElement>) => void;
}
