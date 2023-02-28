import { MouseEventHandler } from "react";
import styled from "styled-components";

export const Container = styled.div`
    background: #fff6;
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    z-index: 99;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    margin-bottom: 2rem;
    margin-top: auto;
    opacity: 0;
    cursor: pointer;
    
    transition: all 0.5s;
    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1) rotate(-380deg);
        opacity: 1;
    }
`