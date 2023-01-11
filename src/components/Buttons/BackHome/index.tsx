import React from "react";
import {BackHomeText, BackHomeWrapper} from "./style";
import {NavLink} from "react-router-dom";

export const BackHome = () => {
    
    return (
        <BackHomeWrapper>
                <NavLink to="/">
                    <BackHomeText>
                        На главную
                    </BackHomeText>
                </NavLink>
        </BackHomeWrapper>
    )
}
