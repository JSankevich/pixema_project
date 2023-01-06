import React, {ReactEventHandler, useState} from "react";
import {SearchWrapper} from "./style";

export const Search = () => {
    const [search, setSearch] = useState('');

    const SearchFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(search)
    }

    return (
        <>
            <SearchWrapper>
                <input type="text" placeholder="Начать поиск..." onChange={SearchFunc}/>
            </SearchWrapper>
        </>
    )
}
