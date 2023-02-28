import { ExtratoType } from "./extrato"

export type WalletType = {
    walletId: number
    name: string
    value: number
    operations: ExtratoType[]
}