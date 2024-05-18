"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { toogleTodo, deleteTodo } from "@/actions/todo.actions";

const Todo = ({ todo }) => {
  const handleToogle = async (e) => {
    await toogleTodo(todo.id);
  };
  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };
  return (
    <div className="p-5 flex justify-between">
      <div className="flex gap-4 items-center">
        <input
          className="size-5"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToogle}
        />
        <p className={`text-xl ${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="flex gap-3 bg-red-600 text-white items-center p-2 rounded"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
