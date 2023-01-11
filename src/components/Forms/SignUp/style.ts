import styled from "styled-components";

export const SignUpWrapper = styled.div `
    padding: 40px;
    width: 574px;
    height: 650px;
    background: #242426;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 100px;

    @media (max-width: 790px) {
        width: 272px;
        height: 630px;
        padding: 24px;
        margin-bottom: 48px;
    }
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

        @media (max-width: 790px) {
            font-size: 14px;
            line-height: 20px;
            margin-top: 10px;
        }
    }

    @media (max-width: 790px) {
        font-size: 14px;
        line-height: 20px;
        margin-top: 24px;
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
    top: 370px;

    @media (max-width: 790px) {
        top: 350px;
        width: 245px;
    }
  
`;

export const WrapperEmailError = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 480px;

    @media (max-width: 790px) {
        width: 245px;
    }
`;

export const WrapperErrorPassword = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 590px;

    @media (max-width: 790px) {
        top: 615px;
        width: 245px;
    }
`;