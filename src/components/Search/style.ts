import styled from "styled-components";

export const SearchWrapper = styled.div `
    width: 1186px;
    height: 56px;
    margin: 40px auto 56px auto;

    input {
      height: 99%;
      width: 99%;
      background: #323537;
      border-radius: 10px;
      font-family: 'Exo 2', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #80858B;
      outline: 0;
      box-shadow: none;
      border: none;
      padding-left: 20px;

    &:focus {
        outline: 0;
    }

    &::placeholder {
        color: #80858B;
        opacity: 0.5;
    }
`;
