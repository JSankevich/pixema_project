import * as React from "react";
import {ReactNode} from "react";
import {Wrapper} from "./style";
import {Search} from "../components/Search";
import {NavLink} from "react-router-dom";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
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