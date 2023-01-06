import * as React from "react";
import {ReactNode} from "react";
import {Wrapper} from "./style";
import {Search} from "../components/Search";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Wrapper>
                <Search />
                {children}
            </Wrapper>
        </>
    )
}