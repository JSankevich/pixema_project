import styled from "styled-components";

export const FooterWrapper = styled.div `
    width: 158px;
    height: 24px;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #AFB2B6;
    margin: 0 auto 44px auto;
    display: flex;
    justify-content: center;

    @media (max-width: 1490px) {
        width: 768px;
    }
  
    @media (max-width: 790px) {
        width: 320px;
    }
`;