"use client";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      registerModal.onClose();
    } catch (err) {
      toast.error("Error while signing up");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Sheol Blogs" subtitle="Create an Account!" />
      <Input id="name" label="name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="email" label="email" disabled={isLoading} register={register} errors={errors} required />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline onClick={() => signIn("google")} label="Continue with Google" icon={FcGoogle} />
      <Button outline onClick={() => signIn("github")} label="Continue with Github" icon={AiFillGithub} />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={() => {
              registerModal.onClose();
              loginModal.onOpen();
            }}
            className="text-neutral-800 cursor-pointer hover:underline font-semibold"
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      loading={isLoading}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
