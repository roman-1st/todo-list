
export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    los: number,
}

export type TodoState = {
    todos: Todo[],
    filterTodos: string,
    isLoading: boolean,
    theme: string,
}

export type InitialStateType = {
    value: TodoState,
}