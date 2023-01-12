import React from "react";
import {NotFoundText} from "./style";
import {BackHome} from "../Buttons/BackHome";

export const NotFound = () => {
    return (
        <>
            <NotFoundText>
                !!! Странице не найдена !!!
            </NotFoundText>
            <BackHome />
        </>
    )
}