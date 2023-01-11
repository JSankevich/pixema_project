import styled from "styled-components";

export const TextSearchWrapper = styled.div `
    width: 700px;
    margin: 0 auto;
    height: 56px;
 
    @media (max-width: 790px) {
        width: 272px;
    }
  
    input {
        outline: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        background: #323537;
        padding: 20px;
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #80858B;
      
        ::placeholder {
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

