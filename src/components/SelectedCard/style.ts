import styled from "styled-components";

export const SelectedWrapper = styled.div `
    width: 1186px;
    height: 668px;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    a {
        text-decoration: none;
    }
`;

export const ImageBigWrapper = styled.div `
    width: 266px;
    height: 356px;
  
    img {
      object-fit: cover;
      width: 99%;
      height: 100%;
      border-radius: 20px;
    }
`;

export const ContentWrapper = styled.div `
    width: 878px;
    height: 668px;
    border: 1px solid white;
`;

export const FilmGenre = styled.div `
    height: 24px;
    border: 1px solid white;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #AFB2B6;
`;

export const FilmTitle = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #FFFFFF;
    border: 1px solid white;
`;

export const FilmRating = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    width: 37px;
    height: 28px;
    background: #00A340;
    border-radius: 6px;
    text-align: center;
    padding: 2px 8px;
`;

export const FilmLength = styled.div `
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 2px 8px;
    width: 73px;
    height: 28px;
    background: #323537;
    border-radius: 6px;
    margin-left: 20px;
`;

export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 24px;
`;

export const FilmDescription = styled.div `
    width: 878px;
    height: 120px;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border: 1px solid white;
    margin-top: 40px;
`;