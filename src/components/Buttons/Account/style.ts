import styled from "styled-components";

export const NoAccountWrapper = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #80858B;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;

    @media (max-width: 790px) {
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
    }
`;