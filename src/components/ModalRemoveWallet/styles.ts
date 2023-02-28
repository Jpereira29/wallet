import styled from "styled-components";

export const Container = styled.div<{isOpen: boolean}>`
    display: ${props => props.isOpen ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;

    div {
        display: flex;
        width: 400px;
        background: var(--blue);
        padding: 0.4rem 0.6rem;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        h2 {
            color: #fff;
            margin: 0
        }
        .close {
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            border-radius: 10px;
            font-size: 26px;
            color: #fff;
            font-weight: bold;
            width: 40px;
            height: 40px;
            margin: 0.5rem;
            top: 0;
            right: 0;
            cursor: pointer;

            transition: all 0.5s;
            &:hover{
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
        }

        p {
            color: #fff014;
        }
       .button {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
       }
        button {
            background: none;
            border: 2px solid #fff;
            border-radius: 50px;
            width: 140px;
            height: 40px;
            color: #fff;
            font-weight: bold;
            margin: 0.2rem 0;
            cursor: pointer;
        }

        .cancelar {
            transition: all 0.5s;
            &:hover{
                background: #fff014;
                color: orange;
            }
        }

        .excluir {
            transition: all 0.5s;
            &:hover{
                background: #ed6a59;
                color: orange;
            }
        }
    }
`

export const Content = styled.span`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #00000080;
`