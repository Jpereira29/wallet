import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ButtonRemove } from "../ButtonRemove";
import * as C from "./styles";

type Props = {
    id: number
    name: string
    value: number
    setModalDeleteOPen: (bool: boolean) => void
    setDeleteThisWallet: (num: number) => void
}

export function Wallet({ id, name, value, setModalDeleteOPen, setDeleteThisWallet }: Props) {
    const router = useRouter()
    const [dash, setDash] = useState(false)

    useEffect(() => {
        let ev = document.getElementById("body-container" + id)!
        ev.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
        ev.addEventListener("mousedown", function (e) {
            if (e.buttons == 2) {
                setDash(true)
                setTimeout(() => setDash(false), 2000)
            }
        });
    })

    return (
        <C.Container>
            <span
                onClick={() => setDeleteThisWallet(id)}
            >
                <ButtonRemove
                    dash={dash}
                    setIsOpen={setModalDeleteOPen}
                />
            </span>
            <div
                id={"body-container" + id}
                className="body-container"
                onClick={() => router.push({
                    pathname: "/wallet",
                    query: {
                        id
                    }
                })}
            >


                <Image src="/images/wallet.png" height={60} width={60} alt="wallet-icon" />
                <h1>{name}</h1>
                <div className="content">
                    <h2>R$ {value}</h2>
                </div>
            </div>
        </C.Container>
    )
}