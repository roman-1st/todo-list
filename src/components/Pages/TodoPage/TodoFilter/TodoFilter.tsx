import React from 'react';
import * as S from './TodoFilter.style'
import {todosFilter} from "@/src/data/constans/filter";
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {filterTodo} from "@/src/redux/features/todo-slice";
const TodoFilter = () => {
    const {filterTodos} =  useTypedSelector((state) => state.todoReducer.value)
    const dispatch = useDispatch()

    return (
        <S.FilterContainer>
            <S.FilterSelect
                onChange={ (e) => dispatch(filterTodo(e.target.value))}
                defaultValue={filterTodos}
            >
                {
                    todosFilter.map( (el) =>
                        <option value={el.status} key={el.id} > {el.value} </option>
                    )
                }
            </S.FilterSelect>
        </S.FilterContainer>
    );
};

export default TodoFilter;