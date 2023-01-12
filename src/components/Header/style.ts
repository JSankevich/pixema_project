import styled from "styled-components";

export const LogoWrapper = styled.div `
   width: 158px;
   height: 40px;
  
  img {
      width: 100%;
      height: 100%;
  }
  
  @media (max-width: 790px) {
      width: 152px;
      height: 39px;
  }
`;

export const SignWrapper = styled.div `
    width: 56px;
    height: 56px;
  
    a {
        text-decoration: none;
    }
  
    img {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 790px) {
        width: 35px;
        height: 35px;
    }
`;

export const HeaderWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 1480px;
    margin-top: 40px;
    margin-bottom: 56px;

    @media (max-width: 1490px) {
        width: 768px;
    }

    @media (max-width: 790px) {
        width: 320px;
    }
`;

export const UserWrapper = styled.div `
    color: white;
    text-align: center;
    margin: auto auto auto 10px;
  
    @media (max-width: 790px) {
        width: 70px;
    }
`;

export const RightPanel = styled.div `
    border: 2px solid greenyellow;
    display: flex;
    flex-direction: row;
    width: 285px;
    justify-content: space-between;

    @media (max-width: 790px) {
        width: 120px;
        height: 40px;

        .userNameWrapper {
            display: none;
        }
    }
`;
