import React from 'react';
import {CardWrapper, FilmRating, FilmTitle, FilmType, ImageWrapper} from "./style";
import {FilmInfo} from "./types";

export const LittleCard = (e:FilmInfo) => {
    return (
        <CardWrapper key={e.filmId}>
            <ImageWrapper><img src={e.posterUrlPreview} alt={e.nameRu}/></ImageWrapper>
            <FilmRating rating={e.rating}>
                {e.rating}
            </FilmRating>
            <FilmTitle>{e.nameRu}</FilmTitle>
            <FilmType>{e.genres.map(genre => genre.genre).toString().split(',').join(' · ')}</FilmType>
        </CardWrapper>
    )
};



