import React from "react";
import pixema_logo from "./images/pixema_logo.svg";
import signIn from "./images/signIn.svg";
import {HeaderWrapper, LogoWrapper, SignWrapper, UserWrapper, RightPanel } from "./style";
import {Search} from "./Search";
import {NavLink, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        <HeaderWrapper>
            <LogoWrapper onClick={() => navigate('/')}><img src={pixema_logo} alt="logo" /></LogoWrapper>
            <RightPanel>
            <Search />
            <SignWrapper>
                <NavLink to='/SignIn'>
                    <img src={signIn} alt="SignIn" />
                </NavLink>
            </SignWrapper>
            <UserWrapper className='userNameWrapper'>Имя пользователя</UserWrapper>
            </RightPanel>
        </HeaderWrapper>
        </>
    )
}