import styled from "styled-components"
import { Input } from "../atoms/Input"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const SearchInput = () => {
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrap>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrap>
        </SContainer>
    )
}

const SContainer = styled.div`
display:flex;
align-item:center;
`;

const SButtonWrap = styled.div`
padding-left:8px;
`;