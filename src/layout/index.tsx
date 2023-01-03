import * as React from "react";
import {ReactNode} from "react";
import {Wrapper} from "./style";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}