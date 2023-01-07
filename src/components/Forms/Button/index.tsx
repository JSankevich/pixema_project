import React from "react";
import {ButtonWrapper} from "./style";

export type ButtonProps = {
    disabled: boolean,
    type: 'submit',
    text: string,
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonWrapper>
            <button disabled={props.disabled} type={props.type}>{props.text}</button>
        </ButtonWrapper>
    )
}