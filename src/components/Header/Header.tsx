import React from 'react';
import * as S from './Header.style'
import Link from "next/link";
import ChangeTheme from "@/src/components/Header/ChangeTheme/ChangeTheme";
// import Link from "next/link";

const Header = () => {
    return (
        <S.Header>
            <S.HeaderLinkContainer>
                <S.Link > <Link href={'/'}> Домашняя страница</Link> </S.Link>
                <S.Link > <Link href={'/todos'}> Список задач</Link> </S.Link>
            </S.HeaderLinkContainer>
            <ChangeTheme />
        </S.Header>
    );
};

export default Header;