import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { UserCard } from "../organisms/user/UserCard";
import { SearchInput } from "../molecules/SearchInput";



const user = {
    name: "ゆうた",
    image: "https://plus.unsplash.com/premium_photo-1676389281733-aaefab0e7907",
    email: "aaaa@aaaa.com",
    phone: "000-999-9999",
    company: {
        name: "鈴木商事"
    },
    website: "https://google.com"
};

export const Users = () => {
    return (
        <>
            <Header />
            <SH2>ユーザー一覧</SH2>
            <SSeach>
                <SearchInput />
            </SSeach>
            <UserCard user={user} />
            <Footer />
        </>
    )
}

const SSeach = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:24px;
`

const SH2 = styled.h2`
text-align:center;
`