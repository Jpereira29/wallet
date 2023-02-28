import { MouseEventHandler } from "react";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    #operation-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 200px;
        height: 100px;
        border: 1.5px solid #FFF;
        border-radius: 20px;
        margin: 0 2rem;
        cursor: pointer;
    }
`