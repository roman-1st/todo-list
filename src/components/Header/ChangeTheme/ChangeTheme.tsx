import React, {useState} from 'react';
import * as S from "./ChangeTheme.style"
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import {DARK, LIGHT, siteTheme} from "@/src/data/constans/theme";
import {useDispatch} from "react-redux";
import {changeTheme} from "@/src/redux/features/todo-slice";

const ChangeTheme = () => {
    const dispatch = useDispatch()
    const [isTheme, setIsTheme] = useState(siteTheme)

    const handleThemeChange = (id: number) => {
        setIsTheme((prevThemes) =>
            prevThemes.map((theme) =>
                theme.id === id ? { ...theme, state: true } : { ...theme, state: false }
            )
        );

        const newTheme = isTheme.find((el) => el.id === id);
        if (newTheme) {
            dispatch(changeTheme(newTheme.value));
        }
    };

    // решил попробовать изменение логики не через isLight в redux с boolean значением, а через массив. Не знаю почему, может быть успею переделать.

    return (
        <S.ChangeThemeContainer>
            {
                isTheme.map( (el) =>
                    <S.Button
                        onClick={ (e) => handleThemeChange(el.id) }
                        key={el.id}
                        value={el.value}
                        isActive={el.state}> {el.theme} </S.Button>
                )
            }

        </S.ChangeThemeContainer>

    );
};

export default ChangeTheme;