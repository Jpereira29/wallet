import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 160px;
    border-bottom: 2px solid #FFF;
    border-radius: 30px;
    display: flex;
    align-items: center;
    position: relative;
    .saldo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 200px;
        height: 100px;
        border: 1.5px solid #FFF;
        border-radius: 20px;
        margin: 0 2rem;

        h2, h1 {
            margin: 0;

            span {
                font-size: 20px
            }
        }
    }

    .name {
        margin: auto;
        float: center;
        margin-top: 30px;
    }
`