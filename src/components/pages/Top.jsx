import styled from "styled-components";
import { Header } from "../atoms/layout/Header";

export const Top = () => {
    return (
        <>
            <Header />
            <SH2>TOPページ</SH2>
        </>
    )
}

const SH2 = styled.h2`
text-align:center;
`