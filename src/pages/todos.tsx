import React from 'react';
import TodoPage from "@/src/components/Pages/TodoPage/TodoPage";
import Layout from "@/src/components/Layout/Layout";
import dynamic from "next/dynamic";
import axios from "axios";
import {fetchTodo} from "@/src/redux/features/todo-slice";

const Todos = ({todos}: any) => {
    console.log(todos)
    return (
        <Layout>
            <TodoPage data={todos} />
        </Layout>
    )
};

export default Todos;

export async function getServerSideProps() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?limit=20')
        return {
            props: {
                todos: response.data.slice(0,7)
            }
        }
    } catch (e: any) {
        console.log(e.message)
    }
}
