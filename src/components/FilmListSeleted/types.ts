export type GenreSelected = {
    genre: string;
}

export type FilmInfoSelected = {
    filmId: number,
    nameRu: string,
    genres: [GenreSelected],
    posterUrl: string,
    filmLength: number,
    description: string,
    ratingKinopoisk: number,
}