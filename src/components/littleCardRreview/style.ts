import styled from "styled-components";

export const CardWrapper = styled.div `
    width: 266px;
    height: 433px;
    position: relative;
  
  :hover {
    opacity: 0.6;
  }
  
  :active{
    opacity: 0.9;
  }
`;

export const ImageWrapper = styled.div `
    width: 266px;
    height: 357px;
  
    img {
      object-fit: cover;
      width: 99%;
      height: 100%;
      border-radius: 20px;
    }
`;

export const FilmTitle = styled.p `
    width: 266px;
    height: 24px;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const FilmType = styled.div `
    width: 260px;
    height: 24px;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #AFB2B6;
    margin-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const FilmRating = styled.div <{rating:string}>`
    width: 37px;
    height: 28px;
    padding: 2px 8px;
    position: absolute;
    left: 20px;
    top: 20px;
    background: ${(props) => {
        if (Number(props.rating) > 7) {
             return '#00A340';
        } else if (Number(props.rating) > 5) {
            return '#F3A608';
        } else {
            return '#F45D2D';
        }
    }};
    border-radius: 6px;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;