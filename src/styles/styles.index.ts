import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    position: relative;
    .content-area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 700px;
    }

    .button-add {
        margin-bottom: 2rem;
        margin-top: auto;
    }
`