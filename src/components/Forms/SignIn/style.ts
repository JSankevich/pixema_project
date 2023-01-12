import styled from "styled-components";

export const SignInWrapper = styled.div `
    padding: 40px;
    width: 574px;
    height: 540px;
    background: #242426;
    border-radius: 10px;
    margin: auto;
    position: relative;
    margin-bottom: 100px;

    @media (max-width: 790px) {
        width: 272px;
        height: 500px;
        padding: 24px;
        margin-bottom: 48px;
    }
`;

export const ErrorWrapperPassword = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    bottom: 200px;

    @media (max-width: 790px) {
        bottom: 140px;
    }
`;

export const ErrorWrapperName= styled.div`
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 205px;

    @media (max-width: 790px) {
        top: 185px
    }
`;

export const WrapperTextAccount = styled.div `
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

        @media (max-width: 790px) {
            font-size: 14px;
            line-height: 20px;
            margin-top: 24px;
        }
    }
`;

