import React, {useEffect, useState} from "react";
import {Title} from "../Title";
import {SignInWrapper, ErrorWrapperPassword, ErrorWrapperName, WrapperTextAccount} from "./style"
import {CustomInput} from "../../CustomInput";
import {Button} from "../../Buttons/SignInUP";
import {DontHaveAccount} from "../../Buttons/Account";
import {NavLink, useNavigate} from "react-router-dom";
import {ENTER_NAME, ENTER_PASSWORD, NOT_ERROR, WRONG_NAME_LENGTH, WRONG_PASSWORD_LENGTH} from "../../../utils/vilidate";

export const SignIn = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [nameError, setNameError] = useState(' ');
    let navigate = useNavigate();

    useEffect(() => {
         if (emailError || passwordError) {
             setFormValid(false);
         } else {
             setFormValid(true);
         }

    }, [emailError, passwordError])

    const handleSignIn = (e:any) => {
        e.preventDefault();
        let userInStorage:any = localStorage.getItem(name);
        let dataInStorage = JSON.parse(userInStorage);

        if (userInStorage == null) {
            alert ("Неверное имя пользователя. Попробуйте ещё раз");
        } else if (name == dataInStorage.username && password == dataInStorage.password) {
            alert (`Здравствуйте, ${name}! С возвращением`);
            setName('');
            setPassword('');
            navigate('/');
        } else {
            alert ("Неверный пароль. Попробуйте ещё раз");
        }
    }

    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName (e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 10 ) {
            setNameError(`${WRONG_NAME_LENGTH}`)
            if (!e.target.value) {
                setNameError(`${ENTER_NAME}`)
            }} else {
            setNameError(`${NOT_ERROR}`)
        }
    }

    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
         setPassword (e.target.value)
         if (e.target.value.length < 5 || e.target.value.length > 20 ) {
             setPasswordError(`${WRONG_PASSWORD_LENGTH}`)
             if (!e.target.value) {
                 setPasswordError(`${ENTER_PASSWORD}`)
             }} else {
             setPasswordError(`${NOT_ERROR}`)
         }
     }

    return (
        <>
            <SignInWrapper>
                <Title text='Войти' />
                <form>
                    <CustomInput
                        onChange={e => handlerName(e)}
                        value={name}
                        name={name}
                        type="text"
                        placeholder="Введите имя пользователя..."
                        label="Имя пользователя"
                    />
                    {nameError && <ErrorWrapperName>{nameError}</ErrorWrapperName>}
                    <CustomInput
                        onChange={e => handlerPassword(e)}
                        value={password}
                        name={password}
                        type="password"
                        placeholder="Введите ваш пароль..."
                        label="Пароль"
                    />
                    {passwordError && <ErrorWrapperPassword>{passwordError}</ErrorWrapperPassword>}
                </form>
                <Button onClick={handleSignIn} disabled={!formValid} type="submit" text="Войти" />
                <WrapperTextAccount>
                    <DontHaveAccount textMain='Нет аккаунта? ' />
                    <NavLink to="/SignUp">
                        <p>Зарегистрироваться</p>
                    </NavLink>
                </WrapperTextAccount>
            </SignInWrapper>
        </>
    )
}