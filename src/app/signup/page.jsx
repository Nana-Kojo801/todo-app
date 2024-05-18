"use client"
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useFormState } from "react-dom";
import { signup } from "@/actions/user.actions";

const SignupPage = () => {
  const [state, formAction] = useFormState(signup, { error: "" });
  return (
    <div className="flex flex-col gap-3 w-full h-full justify-center items-center">
      <h1>Sign up</h1>
      {state?.error && (
        <p className="bg-red-500 w-full max-w-[470px] text-red-700 p-3 rounded-lg grid place-content-center mt-5">
          {state?.error}
        </p>
      )}
      <form
        action={formAction}
        className="flex flex-col gap-10 w-full max-w-[470px] mt-7"
      >
        <div className="w-full flex items-center p-3 bg-gray-300 border-none rounded-lg focus-within:border-2 focus-within:border-black">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="bg-transparent flex-grow outline-none"
          />
          <FaUser className="mr-3" />
        </div>
        <div className=" w-full flex p-3 items-center bg-gray-300 border-none rounded-lg" >
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-transparent flex-grow outline-none"
          />
          <FaLock className="mr-3" />
        </div>
        <div className=" w-full flex p-3 items-center bg-gray-300 border-none rounded-lg">
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            className="bg-transparent flex-grow outline-none"
          />
          <FaLock className="mr-3" />
        </div>
        <SubmitButton text="Sign up" />
      </form>
      <p className="text-center text-base">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
