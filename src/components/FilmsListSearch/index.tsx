import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {SelectedCard} from "../SelectedCard";
import {FilmInfo} from "../FilmsList/types";
import {API_KEY, API_URL_POPULAR} from "../../utils";
import {BlockFilms} from "../FilmsList/style";
import {LittleCard} from "../littleCardRreview";
import {Search} from "../Header/Search";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

export const SearchList = () => {
    const [search, setSearch] = useState<FilmInfo[]>([]);
    // handleEnter = (search) => {
    //     if (search.trim() === "") return;
    //     search = encodeURIComponent(search);
    //     fetch(`http://www.omdbapi.com/?apikey=your-api-key&s=${search}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({movies: data.Search}));
    //
    //
    // useEffect(() => {
    //     fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${params}&page=1`,
    //         {
    //             headers: {
    //                 'X-API-KEY': API_KEY,
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => setSearch(data.films))
    // },[])
    // console.log(search)
     const handleClick = (e: any) => {
        let data = e.target.value;
        console.log (data)
    }

    return (
        <>
            <div></div>

        </>
    )
}