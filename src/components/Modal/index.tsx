import { api } from "@/services/api";
import { WalletType } from "@/types/wallet";
import { Dispatch, SetStateAction, useState } from "react";
import * as C from "./styles";

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    setWallets: Dispatch<SetStateAction<[WalletType] | undefined>>
    wallets: [WalletType] | undefined
}

export function Modal({ isOpen, setIsOpen, wallets, setWallets }: Props) {
    const [name, setName] = useState("")
    const [value, setValue] = useState(0)

    function handleName(e: any) {
        setName(e.target.value)
    }

    function handleValue(e: any) {
        setValue(e.target.value)
    }

    async function addWallet() {
        const token = localStorage.getItem('token');

        const authorization = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const data = {
            name,
            value
        }

        await api.post('/Wallet', data, authorization).then(response => {
            let w: any = [...wallets!, response.data]
            setWallets(w), token
            setIsOpen(false)
        })
    }

    return (
        <C.Container
            isOpen={isOpen}
        >
            <C.Content onClick={() => setIsOpen(false)}></C.Content>
            <div>
                <h2>Adicionar carteira</h2>
                <span className="close" onClick={() => setIsOpen(false)}>
                    x
                </span>
                <input type="text" placeholder="Nome" onChange={handleName} />
                <input type="number" placeholder="Valor" onChange={handleValue} />
                <button onClick={() => addWallet()}>Salvar</button>
            </div>
        </C.Container>
    )
}