import { Extrato } from "@/components/Extrato";
import { ModalOperation } from "@/components/ModalOperation";
import { WalletInformations } from "@/components/WalletInformations";
import { api } from "@/services/api";
import { Container } from "@/styles/styles.wallet";
import { WalletType } from "@/types/wallet";
import router from "next/router";
import { useEffect, useState } from "react";

export default function Wallet() {
  const [data, setData] = useState<WalletType>();
  const [isOpen, setIsOpen] = useState(Boolean)
  const [id, setId] = useState(0)
  const [status, setStatus] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = +router.query.id!
    setId(id)
    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    async function fetchData() {
      await api.get('/Wallet/' + id, authorization).then(response => {
        setData(response.data)
      }).catch(() => router.push("/login"))
    }
    fetchData()
  }, [status])

  return (
    <Container>
      <WalletInformations id={data?.walletId} name={data?.name} value={data?.value} setIsOpen={setIsOpen} />
      <Extrato
        dataOperation={data?.operations}
      />
      <ModalOperation
        walletid={id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setStatus={setStatus}
        status={status}
      />
    </Container>
  )
}