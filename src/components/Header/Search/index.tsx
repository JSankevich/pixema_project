import React from "react";
import {SearchWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import search from "../../../images/search.png"

export const Search = () => {
    const navigate = useNavigate();
    return (
        <SearchWrapper>
            <img src={search} alt="search" onClick={() => navigate("/Search")}/>
        </SearchWrapper>
    )
}
