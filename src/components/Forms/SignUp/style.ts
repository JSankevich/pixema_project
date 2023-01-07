import styled from "styled-components";

export const SignUpWrapper = styled.div `
    padding: 40px;
    width: 574px;
    height: 650px;
    background: #242426;
    border-radius: 10px;
    margin: auto;
`;

export const TextWrapper = styled.div `
    display: flex;
    flex-direction: row;
    height: 24px;
    justify-content: center;

    a {
        text-decoration: none;
    }

    p {
        color: rgba(123, 97, 255, 1);
        cursor: pointer;
        margin-top: 32px;
    }
`;

export const ErrorWrapperName = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 220px
`;

export const WrapperEmailError = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 330px
`;

export const WrapperErrorPassword = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    bottom: 330px
`;