import styled from "styled-components";

export const Container = styled.div<{load: boolean}>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
        display: ${props=> props.load ? "none" : "block"};
        width: 350px;
        background: none;
        border: 3px solid var(--blue);
        border-radius: 7px;
        padding: 10px 15px;
        font-family: 'Secular One', sans-serif;
        color: white;
        input {
            display: block;
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 10px;
            padding: 0 10px;
            border: 2px solid var(--blue);
        }

        button {
            width: 150px;
            height: 40px;
            border-radius: 50px;
            font-family: 'Secular One', sans-serif;
            font-weight: bold;
            font-size: 18px;
            color: white;
            background: none;
            border: 2px solid var(--blue);
            transition: all 0.5s;
            &:hover {
                filter: brightness(0.8);
                transition: all 0.5s;
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
        }
    }
`