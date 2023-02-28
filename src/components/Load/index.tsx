import { Container } from "./styles";

type Props = {
    load: boolean
}
export function Load({ load }: Props) {
    return (
        <Container
            load={load}
        >
            <div className="loader">
                <div className="face">
                    <div className="circle"></div>
                </div>
            </div>
        </Container>
    )
}