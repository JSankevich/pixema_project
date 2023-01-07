import React, {useEffect, useState} from "react";
import {Title} from "../Title";
import {SignInWrapper, ErrorWrapperPassword, ErrorWrapperEmail, WrapperTextAccount} from "../SignIn/style"
import {CustomInput} from "../../CustomInput";
import {
    emailRegExp,
    ENTER_EMAIL,
    ENTER_PASSWORD,
    NOT_ERROR,
    WRONG_EMAIL,
    WRONG_PASSWORD_LENGTH
} from "../../CustomInput/validate";
import {Button} from "../Button";
import {DontHaveAccount} from "../Account";
import {NavLink} from "react-router-dom";

export const SignIn = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [formValid, setFormValid] = useState(false);

    useEffect(() => {
         if (emailError || passwordError) {
             setFormValid(false);
         } else {
             setFormValid(true);
         }

     }, [emailError, passwordError])

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
             }} else {
             setPasswordError(`${NOT_ERROR}`)
         }
     }

    return (
        <SignInWrapper>
            <Title text='Войти' />
            <form>
            <CustomInput
                onChange={e => handlerEmail(e)}
                value={email}
                name={email}
                type="email"
                placeholder="Введите вашу почту..."
                label="Email"
                 />
            {emailError && <ErrorWrapperEmail>{emailError}</ErrorWrapperEmail>}
            <CustomInput
                onChange={e => handlerPassword(e)}
                value={password}
                name={password}
                type="password"
                placeholder="Введите ваш пароль..."
                label="Пароль"
                 />
            {passwordError && <ErrorWrapperPassword>{passwordError}</ErrorWrapperPassword>}
            <Button disabled={!formValid} type="submit" text="Войти" />
            </form>
            <WrapperTextAccount>
            <DontHaveAccount textMain='Нет аккаунта? ' />
            <NavLink to="/SignUp">
            <p>Зарегистрироваться</p>
            </NavLink>
            </WrapperTextAccount>
        </SignInWrapper>

    )
}