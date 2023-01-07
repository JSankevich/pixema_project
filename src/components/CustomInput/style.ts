import styled from "styled-components";

export const InputWrapper = styled.div `
  
    input {
        width: 494px;
        height: 56px;
        background: #323537;
        border-radius: 10px;
        outline: 0;
        outline-offset: 0;
        border: none;
        padding: 20px;
        margin-bottom: 24px;
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #80858B;
      
        &::placeholder {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #80858B;
      }
      
        :focus {
            border: 2px solid #7B61FF;
        }
    }
`;

export const LabelWrapper = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 8px;

`;