import styled from "styled-components";

export const Container = styled.div<{ dash: boolean }>`
    background: #ffffff8a;
    display: ${props => props.dash ? "flex" : "none"};
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;

    transition: all 0.5s;
    &:hover{
        background: #fff;
        -webkit-transform: scale(1.1);
        transform: scale(1.1); 
    }
`