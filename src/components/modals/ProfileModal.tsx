"use client";

import Modal from "./Modal";
import ImageUpload from "../inputs/ImageUpload";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "@/hooks/useProfileModal";
import { SafeUser } from "@/types";

interface ProfileModalProps {
  currentUser: SafeUser | null;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const profileModal = useProfileModal();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
      imageSrc: currentUser?.image ?? ""
    }
  });

  const imageSrc = watch("imageSrc");
  const name = watch("name") as string;

  const setCustomValue = (id: string, value: string) => {
    setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);

    try {
      await axios.put("/api/user", data);
      reset();
      toast.success("Profile updated!");
      router.refresh();
      profileModal.onClose();
    } catch (err) {
      toast.error("Error while updating your profile");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload profile value={imageSrc} onChange={value => setCustomValue("imageSrc", value)} />
      <Input id="name" label="Name" disabled={false} register={register} errors={errors} required />
      <Input id="email" label="Email" disabled register={register} errors={errors} required />
    </div>
  );

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        email: currentUser.email,
        imageSrc: currentUser.image
      });
    }
  }, [currentUser, reset]);

  return (
    <Modal
      title="Your Profile"
      isOpen={profileModal.isOpen}
      onClose={profileModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Submit"
      loading={isLoading}
      disabled={isLoading || !name}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
