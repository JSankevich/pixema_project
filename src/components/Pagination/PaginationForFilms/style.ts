import styled from "styled-components";

 export const ContainerFilmsWrapper = styled.div `
      display: flex;
      column-gap: 20px;
      row-gap: 40px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      a {
          text-decoration: none;
      }
 `;

 export const ContainerWrapper = styled.div `
      width: 1480px;
      margin: 0 auto 44px auto;
  
      @media (max-width: 1490px) {
          width: 768px;
      }

      @media (max-width: 790px) {
          width: 320px;
      }
 `;

 export const PaginationWrapper = styled.div `
      margin-top: 30px;
      display: flex;
      justify-content: center;
  
      .MuiPaginationItem-root {
          color: white;
      }
 `;
