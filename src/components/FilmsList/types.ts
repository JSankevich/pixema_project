export type Genre = {
    genre: string;
}

export type FilmInfo = {
    filmId: number,
    nameRu: string,
    genres: [Genre],
    rating: string,
    posterUrl?: string,
    posterUrlPreview: string,
}