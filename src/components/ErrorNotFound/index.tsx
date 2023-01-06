import React from "react";
import {NotFoundText} from "./style";
import {BackHome} from "../ButtonBackHome";
import {NavLink} from "react-router-dom";

export const NotFound = () => {
    return (
        <>
        <NotFoundText>
            Странице не найдена
        </NotFoundText>
        <BackHome />
        </>
    )
}