import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { ButtonReturn } from "../ButtonReturn";
import { Operation } from "../Operation";
import { Container } from "./styles";

type Props = {
    id: number | undefined
    name: string | undefined
    value: number | undefined
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function WalletInformations({ id, name, value, setIsOpen }: Props) {
    const router = useRouter()
    return (
        <Container>
            <ButtonReturn
                route="/"
            />
            <div className="saldo">
                <h2>Saldo</h2>
                <h1><span>R$</span> {value}</h1>
            </div>

            <h1 className="name">{name}</h1>
            <span onClick={() => setIsOpen(true)}><Operation /></span>
        </Container>
    )
}