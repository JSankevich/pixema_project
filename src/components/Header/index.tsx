import React from "react";
import pixema_logo from "./images/pixema_logo.svg";
import signIn from "./images/signIn.svg";
import {HeaderWrapper, LogoWrapper, SignWrapper, UserWrapper } from "./style";
import {Search} from "./Search";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <LogoWrapper><img src={pixema_logo} alt="logo" /></LogoWrapper>
            <Search />
            <SignWrapper>
                <NavLink to='/SignIn'>
                    <img src={signIn} alt="SignIn" />
                </NavLink>
            </SignWrapper>
            <UserWrapper>Имя пользователя</UserWrapper>
        </HeaderWrapper>
        </>
    )
}