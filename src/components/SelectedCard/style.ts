import styled from "styled-components";

export const SelectedWrapper = styled.div `
    width: 1186px;
    height: 668px;
    border: 2px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    a {
        text-decoration: none;
    }

    @media (max-width: 1490px) {
        width: 688px;
    }

    @media (max-width: 790px) {
        width: 272px;
        height: 100%;
        flex-direction: column;
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
  
    @media (max-width: 1490px) {
        width: 208px;
        height: 278px;
    }

    @media (max-width: 790px) {
        width: 272px;
        height: 364px;
        margin-bottom: 40px;
    }
`;

export const ContentWrapper = styled.div `
    width: 878px;
    height: 668px;
    border: 1px solid white;

    @media (max-width: 1490px) {
        width: 448px;
    }

    @media (max-width: 790px) {
        width: 272px;
    }
`;

export const FilmGenre = styled.div `
    height: 24px;
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

    @media (max-width: 1490px) {
        font-size: 32px;
        line-height: 48px;
    }

    @media (max-width: 790px) {
        font-size: 28px;
        line-height: 42px;
    }
  
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
    width: 83px;
    height: 28px;
    background: #323537;
    border-radius: 6px;
    margin-left: 20px;
    text-align: center;
`;

export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 24px;
`;

export const FilmDescription = styled.div `
    width: 878px;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 40px;


    @media (max-width: 1490px) {
        width: 448px;
    }

    @media (max-width: 790px) {
        width: 272px;
    }
`;