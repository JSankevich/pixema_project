import styled from "styled-components";

export const SignInWrapper = styled.div `
    padding: 40px;
    width: 574px;
    height: 540px;
    background: #242426;
    border-radius: 10px;
    margin: auto;
    position: relative;
`;

export const ErrorWrapperPassword = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    bottom: 200px
`;

export const ErrorWrapperEmail= styled.div`
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF5154;
    position: absolute;
    top: 205px
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
}
`;

