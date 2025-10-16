import React from 'react';
import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { useLocation } from 'react-router';
import { UserCard } from "../organisms/user/UserCard";
import { SearchInput } from "../molecules/SearchInput";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `ゆうた${val}`,
        image: "https://plus.unsplash.com/premium_photo-1676389281733-aaefab0e7907",
        email: "aaaa@aaaa.com",
        phone: "000-999-9999",
        company: {
            name: "鈴木商事"
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    return (
        <>
            <Header />
            <SContainer>
                <SH2>ユーザー一覧</SH2>
                <SSeach>
                    <SearchInput />
                </SSeach>
                <SUserArea>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} isAdmin={isAdmin} />
                    ))}
                </SUserArea>
            </SContainer>
            <Footer />
        </>
    )
}

const SContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:24px;
`

const SSeach = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:24px;
`

const SH2 = styled.h2`
text-align:center;
`

const SUserArea = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
grid-gap:20px;
`