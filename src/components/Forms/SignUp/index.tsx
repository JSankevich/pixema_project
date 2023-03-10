import React, {useEffect, useState} from "react";
import {SignUpWrapper, TextWrapper, ErrorWrapperName, WrapperEmailError, WrapperErrorPassword} from "./style";
import {Title} from "../Title";
import {Button} from "../../Buttons/SignInUP";
import {DontHaveAccount} from "../../Buttons/Account";
import {CustomInput} from "../../CustomInput";
import {NavLink} from "react-router-dom";
import {emailRegExp, ENTER_EMAIL, ENTER_NAME, ENTER_PASSWORD, NOT_ERROR, WRONG_EMAIL, WRONG_NAME_LENGTH,
    WRONG_PASSWORD_LENGTH} from "../../../utils/vilidate";

export const SignUpForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ');
    const [nameError, setNameError] = useState(' ');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        let user = {
            username: name,
            email: email,
            password: password,
        }
        localStorage.setItem(name, JSON.stringify(user));
        alert ("Регистрация прошла успешно");
        setName('');
        setEmail('');
        setPassword('');
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

    const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
         setEmail (e.target.value)
         if (!emailRegExp.test(String(e.target.value).toLowerCase())) {
            setEmailError(`${WRONG_EMAIL}`)
            if (!e.target.value) {
                setEmailError (`${ENTER_EMAIL}`)
            }
         } else {
            setEmailError(`${NOT_ERROR}`)
         }
    }

    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword (e.target.value)
          if (e.target.value.length < 5 || e.target.value.length > 20 ) {
             setPasswordError(`${WRONG_PASSWORD_LENGTH}`)
             if (!e.target.value) {
                setPasswordError(`${ENTER_PASSWORD}`)
             }
          } else {
              setPasswordError(`${NOT_ERROR}`)
          }
    }

    return (
        <SignUpWrapper>
            <Title text='Зарегистрироваться' />
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
                    onChange={e => handlerEmail(e)}
                    value={email}
                    name={email}
                    type="email"
                    placeholder="Введите вашу почту..."
                    label="Email"
                />
                {emailError && <WrapperEmailError>{emailError}</WrapperEmailError>}
                <CustomInput
                    onChange={e => handlerPassword(e)}
                    value={password}
                    name={password}
                    type="password"
                    placeholder="Введите ваш пароль..."
                    label="Пароль"
                />
                {passwordError && <WrapperErrorPassword>{passwordError}</WrapperErrorPassword>}
                <Button
                    disabled={!formValid}
                    type="submit"
                    text="Зарегистрироваться"
                    onClick={handlerSubmit}
                />
            </form>
            <TextWrapper>
                <DontHaveAccount textMain='Уже есть аккаунт? ' />
                <NavLink to="/SignIn">
                    <p>Войти</p>
                </NavLink>
            </TextWrapper>
        </SignUpWrapper>
    )
}

