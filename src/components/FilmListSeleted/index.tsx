 import React, {useEffect, useState} from 'react';
 import {NavLink, useParams} from "react-router-dom";
 import {API_KEY} from "../../utils";
 import {SelectedCard} from "../SelectedCard";
 import {FilmInfoSelected} from "./types";
 import {FilmSelectedWrapper} from "./style";
 import {BackHome} from "../ButtonBackHome";

 type IdInfo = {
     id: string,
 }

 export const FilmsListSelected = () => {
     const { id } = useParams<IdInfo>();
     const [item, setItem] = useState<FilmInfoSelected>();

     useEffect(() => {
         fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${Number(id)}`,
             {
                 headers: {
                     'X-API-KEY': API_KEY,
                 }
             })
             .then(response => response.json())
             .then(data => setItem(data))
     },[Number(id)])

     return (
         <>
             <BackHome />
             <FilmSelectedWrapper>
                 {item && (
                 <>
                     <NavLink to={`/film/${id}`}>
                         <SelectedCard
                             filmId={item.filmId}
                             nameRu={item.nameRu}
                             genres={item.genres}
                             ratingKinopoisk={item.ratingKinopoisk}
                             posterUrl={item.posterUrl}
                             filmLength={item.filmLength}
                             description={item.description} />
                     </NavLink>
                 </>
             )}
             </FilmSelectedWrapper>

         </>
                 )

 };