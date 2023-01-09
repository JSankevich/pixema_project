import React, {useEffect, useState} from 'react';
import {LittleCard} from "../littleCardRreview";
import {BlockFilms} from "./style";
import {API_KEY, API_URL_POPULAR} from "../../utils";
import {FilmInfo} from "./types";
import {NavLink} from "react-router-dom";
import {BackHome} from "../ButtonBackHome";
import {Search} from "../Header/Search";

export const FilmsList = () => {
    const [item, setItem] = useState<FilmInfo[]>([]);
    useEffect(() => {
        fetch(API_URL_POPULAR,
            {
                headers: {
                    'X-API-KEY': API_KEY,
                }
            })
            .then(response => response.json())
            .then(data => setItem(data.films))
    },[])
    return (
        <>
        <BlockFilms>
            {item.map(e =>
                <NavLink to={`/film/${e.filmId}`}>
                    <LittleCard key={e.filmId}
                        filmId={e.filmId}
                        nameRu={e.nameRu}
                        rating={e.rating}
                        genres={e.genres}
                        posterUrlPreview={e.posterUrlPreview} />
                </NavLink>
            )}
        </BlockFilms>
        </>
    )
};