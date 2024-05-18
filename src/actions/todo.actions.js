"use server";

import { db } from "@/db/db";
import { getUser } from "./user.actions";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  const user = await getUser();

  const todos = await db.todo.findMany({ where: { userId: user.id } });

  return todos;
};

export const createTodo = async (formData) => {
  const title = formData.get("title");
  const user = await getUser();
  await db.todo.create({
    data: { title, user: { connect: { username: user.username } } },
  });
  revalidatePath("/");
};

export const toogleTodo = async (id) => {
  const oldTodo = await db.todo.findUnique({ where: { id }})
  await db.todo.update({ where: { id }, data: { completed: !oldTodo.completed }})
  revalidatePath("/")
}

export const deleteTodo = async (id) => {
  await db.todo.delete({ where: { id } });
  revalidatePath("/");
};
