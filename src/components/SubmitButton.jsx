"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ text, pendingText = "Loading..." }) => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="primary-btn" >
      {pending ? pendingText : text}
    </button>
  );
};

export default SubmitButton;
