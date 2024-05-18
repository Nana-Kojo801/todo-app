"use server";

import { db } from "@/db/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signup = async (state, formData) => {
  const { username, password, confirmPassword } = Object.fromEntries(formData);
  console.log(username, password, confirmPassword);

  if (!username || !password || !confirmPassword)
    return { error: "All fields required" };

  if (password !== confirmPassword) return { error: "Passwords do not match" };

  await db.user.create({ data: { username, password } });

  redirect("/login");
};

export const login = async (state, formData) => {
  const { username, password } = Object.fromEntries(formData);

  if (!username || !password) return { error: "All fields required" };

  const user = await db.user.findUnique({ where: { username } });

  if (!user) return { error: "User not found" };

  if (user.password !== password) return { error: "Incorrect password" };

  cookies().set("token", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  redirect("/");
};

export const logout = async () => {
  cookies().delete("token")
  redirect("/login")
}

export const getUser = async () => {
  const token = cookies().get("token")?.value;

  if (!token) return null;

  const user = await db.user.findUnique({ where: { id: token } });

  return user;
};
