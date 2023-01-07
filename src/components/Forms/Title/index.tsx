import React from "react";
import {TitleWrapper} from "./style";

export type TitleProps = {
    text: string,
}

export const Title = (text: TitleProps) => {
    return (
        <TitleWrapper>{text.text}</TitleWrapper>
    )
}