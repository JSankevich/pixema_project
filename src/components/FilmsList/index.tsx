import React, {useEffect, useState} from 'react';
import {LittleCard} from "../littleCardRreview";
import {BlockFilms} from "./style";
import {API_KEY, API_URL_POPULAR} from "../../utils";
import {FilmInfo} from "./types";

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
        <BlockFilms>
            {item.map(e =>
                <LittleCard key={e.filmId}
                    filmId={e.filmId}
                    nameRu={e.nameRu}
                    rating={e.rating}
                    genres={e.genres}
                    posterUrlPreview={e.posterUrlPreview} />
            )}
        </BlockFilms>
    )
};