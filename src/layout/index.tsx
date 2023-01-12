import * as React from "react";
import {ReactNode, useContext} from "react";
import {Wrapper} from "./style";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {

    return (
        <Wrapper>
            <Header />
                {children}
            <Footer />
        </Wrapper>
    )
}