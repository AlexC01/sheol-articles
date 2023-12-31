"use client";

import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  textArea?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({ id, label, type, disabled, required, register, errors, textArea, rows }) => {
  return (
    <div className="w-full relative">
      {textArea && (
        <textarea
          className={`peer w-full pt-3 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
            pl-4 ${errors[id] ? "border-rose-500 focus:border-rose-500" : "border-neutral-300 focus:border-black"}`}
          id={id}
          disabled={disabled}
          rows={rows ?? 3}
          {...register(id, { required })}
          placeholder={label}
        />
      )}
      {!textArea && (
        <>
          <input
            className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        pl-4 ${errors[id] ? "border-rose-500 focus:border-rose-500" : "border-neutral-300 focus:border-black"}`}
            id={id}
            type={type ?? "text"}
            disabled={disabled}
            {...register(id, { required })}
            placeholder=" "
          />
          <label
            className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        capitalize
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default Input;
