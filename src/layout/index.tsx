import * as React from "react";
import {ReactNode, useContext} from "react";
import {Wrapper} from "./style";
import {Search} from "../components/Search";
import {NavLink} from "react-router-dom";
import {Theme} from "../components/ThemeContext";
import {ThemeContext} from "../App";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    const useCont = useContext(ThemeContext);

    console.log (useCont);

    return (
        <>
            <Wrapper>
                <NavLink to='/SignIn'>
                    <button>Войти</button>
                </NavLink>
                {children}
            </Wrapper>
            </>
    )
}