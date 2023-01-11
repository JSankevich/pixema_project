import React from "react";
import {NoAccountWrapper} from "./style";

export type Account = {
    textMain: string,
}

export const DontHaveAccount = (props: Account) => {
    return (
        <NoAccountWrapper>
            {props.textMain}
        </NoAccountWrapper>
    )
}