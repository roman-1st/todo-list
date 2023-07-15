import React, {useEffect, useState} from 'react';
import * as S from './TodoPage.style'
import Todo from "@/src/components/Pages/TodoPage/Todo/Todo";
import FilterContainer from "@/src/components/Pages/TodoPage/TodoFilter/TodoFilter";
import axios from "axios";
import AddTodo from "@/src/components/Pages/TodoPage/AddTodo/AddTodo";
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodo} from "@/src/redux/features/todo-slice";
import {ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS} from "@/src/data/constans/filter";
import {DARK, LIGHT} from "@/src/data/constans/theme";

const TodoPage = ({data}:any) => {
    const state = useTypedSelector( (state) => state.todoReducer.value)
    console.log(state.theme)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchTodo([...data]))
    }, [])

    const displayTodos = () => {
        switch (state.filterTodos) {
            case ALL_TODOS:
                return (
                    state.todos.map( (el : any) =>
                        <Todo key={el.id} num={state.todos.indexOf(el)} id={el.id} title={el.title} completed={el.completed} />
                    )
                )
            case COMPLETED_TODOS:
                return (
                    state.todos.map( (el) => {
                        if (el.completed) {
                            return (
                                <Todo key={el.id} num={state.todos.indexOf(el)} id={el.id} title={el.title} completed={el.completed} />
                            )
                        }
                    })
                )
            case ACTIVE_TODOS:
                return (
                    state.todos.map( (el) => {
                        if (!el.completed) {
                            return (
                                <Todo key={el.id} num={state.todos.indexOf(el)} id={el.id} title={el.title} completed={el.completed} />
                            )
                        }
                    })
                )
        }
    }

    return (
        <S.TodoPageContainer theme={state.theme == "LIGHT" ? LIGHT : DARK}>
            <S.TodoPageHeader>
                <S.TodoPageTitle> Список задач </S.TodoPageTitle>
                <FilterContainer />
                <AddTodo />
            </S.TodoPageHeader>
            <S.TodoList>
                { state.todos && displayTodos() }
            </S.TodoList>
        </S.TodoPageContainer>
    );
};

export default TodoPage;