import React from "react";
import Todo from "@/components/Todo";
import { getTodos } from "@/actions/todo.actions";

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <div className="flex flex-col gap-4 mt-4 flex-1 h-full">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
