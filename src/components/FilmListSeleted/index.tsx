 import React, {useEffect, useState} from 'react';
 import {NavLink, useParams} from "react-router-dom";
 import {API_KEY} from "../../utils";
 import {SelectedCard} from "../SelectedCard";
 import {FilmInfoSelected} from "./types";
 import {FilmSelectedWrapper} from "./style";
 import {BackHome} from "../Buttons/BackHome";

 type IdInfo = {
     id: string,
 }

 export const FilmsListSelected = () => {
     const { id } = useParams<IdInfo>();
     const [item, setItem] = useState<FilmInfoSelected>();

     // useEffect(() => {
     //     fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${Number(id)}`,
     //         {
     //             headers: {
     //                 'X-API-KEY': API_KEY,
     //             }
     //         })
     //         .then(response => {
     //             if (response.status >= 200 && response.status < 300) {
     //                return response.json()
     //                .then(data => {
     //                    setItem(data)
     //                })
     //             } else {
     //                 return alert('Ошибка обработки запроса')
     //             }
     //         })
     // },[Number(id)])

     return (
         <>
             <FilmSelectedWrapper>
                 {item && (
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
                 )}
             </FilmSelectedWrapper>
             <BackHome />
         </>
     )
 };