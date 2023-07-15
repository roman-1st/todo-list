
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DARK, LIGHT} from "@/src/data/constans/theme";
import {ALL_TODOS} from "@/src/data/constans/filter";
import {InitialStateType, TodoState} from "@/src/types/todo";

export const initialState = {
    value: {
        todos: [],
        filterTodos: ALL_TODOS,
        isLoading: false,
        theme: LIGHT,
    } as TodoState,
} as InitialStateType;

export const todo = createSlice({
    name: "slice",
    initialState,
    reducers: {
        fetchTodo: (state, action) => {
            return {
                value: {
                    ...state.value,
                    todos: [...action.payload],
                    isLoading: false,
                }
            }
        },
        isLoading: (state) => {
            state.value.isLoading = !state.value.isLoading
        },
        // слайс для изменения состояния выполнения
        setCompleted: (state,action) => {
            const todoItem = state.value.todos.find(item => item.id === action.payload);
            if (todoItem) {
                todoItem.completed = !todoItem.completed;
            }
        },
        removeTodo: (state, action) => {
            return {
                value: {
                    todos: [...state.value.todos.filter( el => el.id != action.payload)],
                    filterTodos: state.value.filterTodos,
                    isLoading: false,
                    theme: state.value.theme,
                }
            }
        },
        addTodo: (state, action) => {
            state.value.todos.push(action.payload)
        },
        filterTodo: (state, action) => {
            state.value.filterTodos = action.payload
        },
        changeTheme: (state, action) => {
            state.value.theme = action.payload
        }
    }
})

export const {
    fetchTodo,
    isLoading,
    removeTodo,
    setCompleted,
    addTodo,
    filterTodo,
    changeTheme,
} = todo.actions

export default todo.reducer