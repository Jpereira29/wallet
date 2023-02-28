import styled from "styled-components";

export const Container = styled.div<{operation: number}>`
    background: #fff;
    
    color: #000;
    width: 600px;
    max-height: 500px;
    border-radius: 5px;
    padding: 0.5rem 0.8rem;
    margin-top: -4rem;
    border: 3px solid #2fbe51;
    overflow-y: auto;
    z-index: 10;
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        //background: orange;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--blue), red);
        border-radius: 20px;
        //border: 3px solid orange;
    }

    table {
        display: block;

        thead, tbody {
            display: flex;
            width: 100%;
        }
        thead th {
            position: sticky;
            top: 0;

        }
        table { border-collapse: collapse; width: 100%; }
th, td { background: #fff; padding: 8px 16px; }

        tbody {
            flex-direction: column;
        }

        tr {
            width: 100%;
            display: ${props => props.operation > 0 ? "flex" : "none"};
            justify-content: space-around;
            text-align: center;
        }
        td, th {
            width: 100%;
            margin: 0.8rem 0;
        }
        td {
            font-size: 13px;
        }
    }

    .red {
        color: red;
    }

    span {
        display: ${props => props.operation == 0 ? "flex" : "none"};
        margin: 10px;
        color: #ffb90b;
        font-weight: bold;
    }
`