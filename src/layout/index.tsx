import * as React from "react";
import {ReactNode, useContext} from "react";
import {Wrapper} from "./style";
import {Search} from "../components/Header/Search";
import {NavLink} from "react-router-dom";
import {Theme} from "../components/ThemeContext";
import {ThemeContext} from "../App";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    const useCont = useContext(ThemeContext);

    console.log (useCont);

    return (
        <>
            <Wrapper>
                <Header />
                {children}
                <Footer />
            </Wrapper>
            </>
    )
}