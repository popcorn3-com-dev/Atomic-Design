import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const Top = () => {
    return (
        <>
            <Header />
            <SH2>TOPページ</SH2>
            <Footer />
        </>
    )
}

const SH2 = styled.h2`
text-align:center;
`