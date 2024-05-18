"use client"
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Link from "next/link";
import { useFormState } from "react-dom"
import { login } from "@/actions/user.actions";
import SubmitButton from "@/components/SubmitButton";

const LoginPage = () => {
  const [state, formAction] = useFormState(login, { error: "" })
  return (
    <div className="flex flex-col gap-3 w-full h-full justify-center items-center">
      <h1>Login</h1>
      {state?.error && <p className="bg-red-500 w-full max-w-[470px] text-red-700 p-3 rounded-lg grid place-content-center mt-5">
        {state?.error}
      </p>}
      
      <form action={formAction} className="flex flex-col gap-10 w-full max-w-[470px] mt-5">
        <div className="w-full flex items-center p-3 bg-gray-300 border-none rounded-lg focus-within:border-2 focus-within:border-black">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="bg-transparent flex-grow outline-none"
          />
          <FaUser className="mr-3" />
        </div>
        <div className=" w-full flex p-3 items-center bg-gray-300 border-none rounded-lg">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-transparent flex-grow outline-none"
          />
          <FaLock className="mr-3" />
        </div>
        <SubmitButton text="Login" />
      </form>
      <p className="text-center text-base">Don't have an account? <Link href="/signup">Signup</Link></p>
    </div>
  );
};

export default LoginPage;
