import styled from "styled-components";

export const SearchWrapper = styled.div `
    width: 56px;
    height: 56px;
    margin-right: 10px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    @media (max-width: 790px) {
        width: 35px;
        height: 35px;
    }

`;
