import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { Wallet } from '@/components/Wallet';
import { WalletType } from '@/types/wallet';
import { Container } from '@/styles/styles.index';
import { ButtonAdd } from '@/components/ButtonAdd';
import { useRouter } from 'next/router';
import { Modal } from '@/components/Modal';
import { ModalRemoveWallet } from '@/components/ModalRemoveWallet';


export default function Home() {

  const [wallets, setWallets] = useState<[WalletType]>()
  const [modalIsOpen, setModalIsOPen] = useState(false)
  const [modalDeleteOpen, setModalDeleteOPen] = useState(false)
  const [deleteThisWallet, setDeleteThisWallet] = useState(0)
  const [status, setStatus] = useState(0)

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token');

    const authorization = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    async function fetchData() {
      await api.get('/Wallet', authorization).then(response => {
        setWallets(response.data), token
      }).catch(() => router.push("/login"))
    }
    fetchData()
  }, [status, router])

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOPen}
        wallets={wallets}
        setWallets={setWallets}
      />

      <ModalRemoveWallet
        id={deleteThisWallet}
        isOpen={modalDeleteOpen}
        setIsOpen={setModalDeleteOPen}
        status={status}
        setStatus={setStatus}
      />

      <div className="content-area">
        {wallets?.map(wallet => (
          <Wallet
            key={wallet.walletId}
            id={wallet.walletId}
            name={wallet.name}
            value={wallet.value}
            setDeleteThisWallet={setDeleteThisWallet}
            setModalDeleteOPen={setModalDeleteOPen}
          />
        ))}
        <span onClick={() => setModalIsOPen(true)} className="button-add">
          <ButtonAdd />
        </span>
      </div>
    </Container>
  )
}
