import React from 'react';
import TodoPage from "@/src/components/Pages/TodoPage/TodoPage";
import Layout from "@/src/components/Layout/Layout";
import dynamic from "next/dynamic";

const Todos = () => {
    return (
        <Layout>
            <TodoPage />
        </Layout>
    )
};

export default Todos;