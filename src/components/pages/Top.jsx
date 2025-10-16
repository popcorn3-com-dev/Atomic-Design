import React, { useContext } from 'react';
import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { useNavigate } from 'react-router';
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate('/users');
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate('/users');
    }
    return (
        <>
            <Header />
            <SH2>TOPページ</SH2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
            <Footer />
        </>
    )
}

const SH2 = styled.h2`
text-align:center;
`