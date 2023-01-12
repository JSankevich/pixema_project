import React, {useEffect, useState} from "react";
import {API_KEY} from "../../../utils";
import {FilmInfo} from "../../littleCardRreview/types";
import {Container, Pagination} from "@mui/material";
import {LittleCard} from "../../littleCardRreview";
import {NavLink} from "react-router-dom";
import {ContainerFilmsWrapper, ContainerWrapper, PaginationWrapper} from "../PaginationForFilms/style";
import {TextSearchWrapper} from "./style";

export const PaginationSearch = () => {
    const [films, setFilms] = useState<FilmInfo[]>([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState();

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}&page=${page}`,
            {
                headers: {
                    'X-API-KEY': API_KEY,
        }})
            .then(response => response.json())
            .then(data => {
                setFilms(data.films)
                setPagesCount(data.pagesCount)
            })
    }, [query,page])

    return (
        <ContainerWrapper>
            <TextSearchWrapper>
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Начните вводить для поиска..."
                />
            </TextSearchWrapper>
            <Container sx={{maxWidth: '1480px'}}>
                <ContainerFilmsWrapper>
                    {
                        films.map(films => (
                            <NavLink to={`/film/${films.filmId}`}>
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
                            size="large"
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