import React from "react";

export type CustomInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    name: string,
    type: "email" | "password" | "text",
    placeholder: "Введите вашу почту..." | "Введите ваш пароль..." | "Введите ваше имя...",
    label: "Email" | "Пароль" | "Имя",
}