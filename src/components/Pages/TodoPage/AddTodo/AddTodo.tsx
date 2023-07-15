import React, {useState} from 'react';
import * as S from './AddTodo.style'
import {TodoValue} from "./AddTodo.style";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import {addTodo} from "@/src/redux/features/todo-slice";
const AddTodo = () => {
    const [modal, setModal]  = useState<boolean>(false)
    const dispatch = useDispatch()
    const [todoText, setTodoText ] = useState<string>("")

    const {todos, theme} = useTypedSelector( (state) => state.todoReducer.value)
    const changeText = (e: any) => {
        setTodoText(e.target.value)
    }

    const addTodoToState = () => {
    const newTodo = {
        id: 0,
        title: '',
        completed: false,
    }
        if(todos.length > 0) {
            newTodo.id = todos.at(-1).id + 1
            newTodo.title = todoText
        } else {
            newTodo.id = 1
            newTodo.title = todoText
        }

        dispatch(addTodo(newTodo))
        console.log('qew')
        setModal(false)
        setTodoText('')
    }

    return (
        <S.AddTodoContainer>
            <S.OpenModalButton theme={theme} onClick={ () => setModal(true)}> Добавить задачу </S.OpenModalButton>
            {
                modal &&
                    <S.Modal open>
                        <S.ModalContainer theme={theme}>
                            <h3> Добавить задачу</h3>
                            <S.TodoValuesContainer>
                                <S.ValueContainer>
                                    <S.TodoValue> Введите текст задачи</S.TodoValue>
                                    <S.TodoTextInput value={todoText} onChange={ (e) => changeText(e)} />
                                </S.ValueContainer>
                                <S.AddTodoButton onClick={addTodoToState}> Добавить </S.AddTodoButton>
                            </S.TodoValuesContainer>
                            <S.CLoseModalButton onClick={() => setModal(false)}> &times;</S.CLoseModalButton>
                        </S.ModalContainer>
                    </S.Modal>
            }
        </S.AddTodoContainer>
    );
};

export default AddTodo;