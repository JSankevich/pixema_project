import React, {ReactEventHandler, useState} from "react";
import {SearchWrapper} from "./style";

export type SearchProps = {
    onChange: () => void,
    value: string,
}

export const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <SearchWrapper>
                <input type="search"
                       placeholder="Начать поиск..."
                       />
            </SearchWrapper>
        </>
    )
}
