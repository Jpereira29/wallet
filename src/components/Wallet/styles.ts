import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    .body-container {
        color: white;
        border: 4px solid #fff;
        width: 200px;
        height: 200px;
        border-radius: 20px;
        padding: 5px;
        margin: 1rem;
        cursor: pointer;

        transition: all 0.5s;
        &:hover{
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        img {
            float: right;
        }

        h1 {
            font-size: 22px
        }

        .content {
            height: 130px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`