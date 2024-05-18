import { createTodo } from "@/actions/todo.actions";
import { logout } from "@/actions/user.actions";
import TodoList from "@/components/TodoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-7 overflow-auto">
      <header className="flex justify-between p-3 px-7 border-b-2">
        <h1>Todo App</h1>
        <form action={logout}>
          <button className="primary-btn p-2 px-3">Logout</button>
        </form>
      </header>
      <main className="overflow-auto flex-1 flex justify-center items-center">
        <Suspense fallback={<p>Loading...</p>}>
          <TodoList />
        </Suspense>
      </main>
      <footer>
        <form action={createTodo} className="w-full">
          <input
            className="w-full p-3 border-gray-600 rounded-lg outline-none border-2"
            type="text"
            placeholder="Add Todo"
            name="title"
          />
        </form>
      </footer>
    </div>
  );
}
