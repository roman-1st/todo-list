import React, {useState} from 'react';
import * as S from './Todo.style'
import {TodoTextContainer} from "./Todo.style";
import {useDispatch} from "react-redux";
import {removeTodo, setCompleted} from "@/src/redux/features/todo-slice";

interface TodoProps {
    id: number,
    num: number,
    title: string,
    completed: boolean,
}

const Todo = ({id, title, completed, num} : TodoProps) => {
    const dispatch = useDispatch()
    // const changeCheck = () => setCheck(!check)
    const changeCheck = () => dispatch(setCompleted(id));
    const remove = () => {
        dispatch(removeTodo(id))
    }

    return (
        <S.TodoContainer completed={completed}>
            <S.TodoId>
                {num + 1}
                {/*<S.TodoUId> Уникальный номер:{id} </S.TodoUId>*/}
            </S.TodoId>
            <S.TodoCheck>
                <S.InputCheck type="checkbox" checked={completed} onChange={changeCheck}/>
            </S.TodoCheck>
            <S.TodoTextContainer>
                {/*<S.TodoTitle> Title </S.TodoTitle>*/}
                <S.TodoText> {title} </S.TodoText>
            </S.TodoTextContainer>
            <S.TodoDeleteContainer>
                <S.DeleteButton onClick={remove}>&times;</S.DeleteButton>
            </S.TodoDeleteContainer>

        </S.TodoContainer>
    );
};

export default Todo;