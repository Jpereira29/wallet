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
        height: 350px;
        background: var(--blue);
        padding: 0.4rem 0.6rem;
        border-radius: 10px;
        justify-content: space-evenly;
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
        input[type='text'], input[type='number'] {
            display: block;
            width: 100%;
            height: 60px;
            padding: 0 0.8rem;
            font-size: 18px;
            color: #fff;
            background: transparent;
            border: 3px solid #fff;
            border-radius: 15px;
        }
        .radio {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
            padding: 3px;
            border-radius: 50px;
            border: solid 2px #fff;
            input[type='radio'] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }

            label {
                width: 100px;
                height: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .label-selec {
                background: #2fbe51;
                border-radius: 50px;
            }
        }
        button {
            background: none;
            border: 2px solid #fff;
            border-radius: 50px;
            width: 180px;
            height: 40px;
            color: #fff;
            font-weight: bold;
            margin: 0.2rem 0;
            cursor: pointer;

            transition: all 0.5s;
            &:hover{
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
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