import React from 'react';
import {
    ContentWrapper, FilmDescription,
    FilmGenre,
    FilmLength,
    FilmRating,
    FilmTitle,
    ImageBigWrapper,
    InfoWrapper,
    SelectedWrapper
} from "./style";
import {FilmInfoSelected} from "../FilmListSeleted/types";

export const SelectedCard = (e:FilmInfoSelected) => {
    return (
        <SelectedWrapper>
                <ImageBigWrapper><img src={e.posterUrl} alt={e.nameRu}/></ImageBigWrapper>
                <ContentWrapper>
                    <FilmGenre>{e.genres.map(genre => genre.genre).toString().split(',').join(' · ')}</FilmGenre>
                    <FilmTitle>{e.nameRu}</FilmTitle>
                    <InfoWrapper>
                        <FilmRating>{e.ratingKinopoisk}</FilmRating>
                        <FilmLength>{e.filmLength} min</FilmLength>
                    </InfoWrapper>
                    <FilmDescription>{e.description}</FilmDescription>
                </ContentWrapper>
        </SelectedWrapper>
    )
};
