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

const TodoPage = () => {
    const [todos, setTodos] = useState([])
    const state = useTypedSelector( (state) => state.todoReducer.value)
    const dispatch = useDispatch()
    useEffect( () => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?limit=20')
                dispatch(fetchTodo(response.data.slice(0,10)))
            } catch (e: any) {
                console.log(e.message)
            }

        }
        fetchTodos()

    }, [])

    // if (state.isLoading) return <p> Loading </p>
    console.log(state.todos)
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
        <S.TodoPageContainer>
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