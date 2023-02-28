import Image from "next/image";
import { Container } from "./styles";

type Props = {
    dash: boolean
    setIsOpen: (bool: boolean) => void
}

export function ButtonRemove({ dash, setIsOpen }: Props) {
    return (
        <Container
            dash={dash}
            onClick={() => setIsOpen(true)}
        >
            <Image src="/images/remover.png" width={22} height={22} alt="Remover" />
        </Container>
    )
}