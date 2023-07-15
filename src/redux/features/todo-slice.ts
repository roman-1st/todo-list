
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
        // получение данных
        fetchTodo: (state, action) => {
            return {
                value: {
                    ...state.value,
                    todos: [...action.payload],
                    isLoading: false,
                }
            }
        },
        // для лоадера, но не стал делать
        isLoading: (state) => {
            state.value.isLoading = !state.value.isLoading
        },
        // для изменения состояния выполнения задачи
        setCompleted: (state,action) => {
            const todoItem = state.value.todos.find(item => item.id === action.payload);
            if (todoItem) {
                todoItem.completed = !todoItem.completed;
            }
        },
        // для удаления задачи
        removeTodo: (state, action) => {
            return {
                value: {
                    ...state.value,
                    todos: [...state.value.todos.filter( el => el.id != action.payload)],
                    isLoading: false,
                }
            }
        },
        //для добавления задачи
        addTodo: (state, action) => {
            state.value.todos.push(action.payload)
        },
        // для фильтрации задачи
        filterTodo: (state, action) => {
            state.value.filterTodos = action.payload
        },
        //для изменения темы
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