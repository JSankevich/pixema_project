 import React from "react";
 import {CustomInputProps} from "./types";
 import {InputWrapper, LabelWrapper} from "./style";

 export const CustomInput = (props: CustomInputProps) => {

     return (
         <InputWrapper>
                <LabelWrapper>
                <label>{props.label}</label>
                </LabelWrapper>
                <input
                 onChange={props.onChange}
                 value={props.value}
                 name={props.name}
                 type={props.type}
                 placeholder={props.placeholder}
                 />
         </InputWrapper>
     )
 };
