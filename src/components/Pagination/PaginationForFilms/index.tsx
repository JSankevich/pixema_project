import React, {useEffect, useState} from "react";
import {API_KEY} from "../../../utils";
import {FilmInfo} from "../../littleCardRreview/types";
import { Container, Pagination } from "@mui/material";
import {LittleCard} from "../../littleCardRreview";
import {NavLink} from "react-router-dom";
import {ContainerFilmsWrapper, ContainerWrapper, PaginationWrapper} from "./style";

export const PaginationFilms = () => {
    const [films, setFilms] = useState<FilmInfo[]>([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState();

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
            {
                headers: {
                    'X-API-KEY': API_KEY,
                }})
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json()
                    .then(data => {
                        setFilms(data.films)
                        setPagesCount (data.pagesCount)
                    })
                } else {
                    return alert('Ошибка обработки запроса')
                }
            })
    }, [page])

    return (
        <ContainerWrapper>
            <Container sx={{maxWidth: '1480px'}}>
                <ContainerFilmsWrapper>
                    {
                        films.map(films => (
                            <NavLink key={films.filmId} to={`/film/${films.filmId}`}>
                                <LittleCard
                                    key={films.filmId}
                                    filmId={films.filmId}
                                    nameRu={films.nameRu}
                                    genres={films.genres}
                                    rating={films.rating}
                                    posterUrlPreview={films.posterUrlPreview} />
                            </NavLink>
                        ))
                    }
                </ContainerFilmsWrapper>
                <PaginationWrapper>
                    {!!pagesCount && (
                        <Pagination
                            className="PaginateItem"
                            color="secondary"
                            size="small"
                            count={pagesCount}
                            page={page}
                            onChange={(_, num) => setPage(num)}
                        />
                    )}
                </PaginationWrapper>
            </Container>
        </ContainerWrapper>
    );
};