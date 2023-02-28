import { api } from "@/services/api";
import Image from "next/image";
import * as C from "./styles";

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    id: number
    setStatus: (status: number) => void
    status: number
}

export function ModalRemoveWallet({ isOpen, setIsOpen, id, setStatus, status }: Props) {
    async function removeWallet() {
        const token = localStorage.getItem('token');

        const authorization = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        await api.delete('/Wallet/' + id, authorization).then(response => {
            if (response.status == 200) {
                setStatus(status + 1)
            }
            setIsOpen(false)
        })
    }

    return (
        <C.Container
            isOpen={isOpen}
        >
            <C.Content onClick={() => setIsOpen(false)}></C.Content>
            <div>
                <h2>Remover carteira</h2>
                <span className="close" onClick={() => setIsOpen(false)}>
                    x
                </span>
                <Image src="/images/reclamar.png" alt="Info" width={60} height={60} />
                <p>Deseja remover permanentemente está carteira?</p>
                <div className="button">
                    <button className="cancelar" onClick={() => setIsOpen(false)}>Cancelar</button>
                    <button className="excluir" onClick={() => removeWallet()}>Excluir</button>
                </div>
            </div>
        </C.Container>
    )
}