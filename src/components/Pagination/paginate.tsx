import React, {useEffect, useState} from "react";
import {PaginateLabel, StyledPaginateContainer} from "./style";
import {API_KEY} from "../../utils";

 export type PaginationType = {
     pagesCount: number,
}

export const Pagination = () => {
    const [pagesCount, setPagesCount] = useState<PaginationType>();

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS`,
            {
                headers: {
                    'X-API-KEY': API_KEY,
                }})
            .then(response => response.json())
            .then(data => setPagesCount (data.pagesCount))
    }, [])
    console.log (pagesCount)

    //const arr = Array.from(Array(Number(pagesCount)+1).keys()).slice(1);
    // console.log(arr);


    return (
        <>
            <StyledPaginateContainer>

            </StyledPaginateContainer>
        </>
    );
};