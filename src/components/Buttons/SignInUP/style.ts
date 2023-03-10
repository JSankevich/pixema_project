import styled from "styled-components";

export const ButtonWrapper = styled.div `
    margin-top: 40px;

    @media (max-width: 790px) {
        margin-top: 10px;
    }
  
    button {
        width: 494px;
        height: 56px;
        background: #7B61FF;
        border-radius: 10px;
        text-decoration: none;
        border: none;
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;

        @media (max-width: 790px) {
            width: 225px;
        }
      
        :hover {
            background-color: #917CFF;
        }
      
        :disabled {
            background-color: #80858B;
            color: #AFB2B6;
        }
    }
`;