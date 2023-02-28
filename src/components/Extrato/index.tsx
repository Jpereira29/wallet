import { ExtratoType } from "@/types/extrato";
import { Container } from "./styles";

type Props = {
    dataOperation: ExtratoType[] | undefined
}

export function Extrato({ dataOperation }: Props) {
    function date(date: string) {
        const d = new Date(date)
        var formatedDate = d.toLocaleString();
        return formatedDate
    }
    return (
        <Container
            operation={dataOperation?.length!}
        >
            <table>
                <thead>
                    <tr>
                        <th>Lançamento</th>
                        <th>Detalhes</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {dataOperation?.map((operation) => (
                        <tr key={operation.operationId}>
                            <td>{date(operation.date!)}</td>
                            <td>{operation.description}</td>
                            <td className={operation.type == 0 ? "red" : "green"}>
                                R$ {operation.type == 0 ? "-" + operation.value : operation.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <span>Não há extrato para ser mostrado!</span>
            </table>
        </Container>
    )
}