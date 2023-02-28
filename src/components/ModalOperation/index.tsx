import { api } from "@/services/api";
import { ExtratoType } from "@/types/extrato";
import { useState } from "react";
import * as C from "./styles";

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    walletid: number
    setStatus: (status: number) => void
    status: number
}

export function ModalOperation({ isOpen, setIsOpen, walletid, setStatus, status }: Props) {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState<number | undefined>()
    const [type, setType] = useState(0 | 1)
    const [classLabelSelect0, setClassLabelSelect0] = useState("")
    const [classLabelSelect1, setClassLabelSelect1] = useState("label-selec")


    function handledescription(e: any) {
        setDescription(e.target.value)
    }

    function handleValue(e: any) {
        setValue(+e.target.value)
    }

    async function addOperation() {
        const token = localStorage.getItem('token');

        const authorization = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        let method = type == 1 ? "Deposit" : "Withdraw"

        const data: ExtratoType = {
            description,
            type,
            value,
            walletid
        }
        await api.post('/Wallet/' + method, data, authorization).then(response => {
            setIsOpen(false)
            if (response.status == 200) {
                setStatus(status + 1)
                setValue(0)
                setDescription("")
            }
        })
    }

    function labelSelect(value: number) {
        if (value == 0) {
            setType(0)
            setClassLabelSelect0("label-selec")
            setClassLabelSelect1("")
        } else {
            setType(1)
            setClassLabelSelect0("")
            setClassLabelSelect1("label-selec")
        }
    }

    return (
        <C.Container
            isOpen={isOpen}
        >
            <C.Content onClick={() => setIsOpen(false)}></C.Content>
            <div>
                <h2>Operação</h2>
                <span className="close" onClick={() => setIsOpen(false)}>
                    x
                </span>
                <input type="number" placeholder="Valor" onChange={handleValue} value={value} />
                <span className="radio">
                    <label className={classLabelSelect0}>
                        <input type="radio" value={0} name="op" onClick={() => labelSelect(0)} />
                        Saque
                    </label>
                    <label className={classLabelSelect1}>
                        <input type="radio" value={1} name="op" onClick={() => labelSelect(1)} />
                        Depósito
                    </label>
                </span>
                <input type="text" placeholder="Descrição" onChange={handledescription} value={description} />
                <button onClick={() => addOperation()}>Salvar</button>
            </div>
        </C.Container>
    )
}