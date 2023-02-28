import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    cursor: pointer;

    transition: all 0.5s;
    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`