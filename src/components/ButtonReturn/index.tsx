import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "./styles";

type Props = {
    route: string
}

export function ButtonReturn({ route }: Props) {
    const router = useRouter()
    return (
        <Container
            onClick={() => router.push(route)}
        >
            <Image alt="return" src="/images/return.png" width={40} height={40} />
        </Container>
    )
}