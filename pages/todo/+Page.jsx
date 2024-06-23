import React from "react";
import { useData } from "vike-react/useData";
import { TodoList } from "./TodoList.jsx";

export default function Page() {
  const data = useData();
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todo} />
    </>
  );
}