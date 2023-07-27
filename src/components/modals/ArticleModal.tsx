"use client";

import useArticleModal from "@/hooks/useArticleModal";
import Modal from "./Modal";
import Heading from "../Heading";
import ImageUpload from "../inputs/ImageUpload";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import { FaRobot } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useCompletion } from "ai/react";
import { useRouter } from "next/navigation";

const ArticleModal = () => {
  const router = useRouter();
  const { complete } = useCompletion({ api: "/api/completion" });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const articleModal = useArticleModal();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      content: "",
      imageSrc: ""
    }
  });

  const imageSrc = watch("imageSrc");
  const title = watch("title") as string;
  const content = watch("content");

  const setCustomValue = (id: string, value: string) => {
    setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);

    try {
      await axios.post("/api/articles", data);
      toast.success("Article created successfully!");
      router.refresh();
      reset();
      articleModal.onClose();
    } catch (err) {
      toast.error("Error while creating article");
    } finally {
      setIsLoading(false);
    }
  };

  const onGenerateContent = useCallback(
    async (c: string) => {
      setIsLoadingAI(true);
      try {
        const completion = await complete(c);
        if (!completion) throw new Error("Error while generating content");
        setCustomValue("content", completion);
      } catch (err) {
        toast.error("Error while generating content");
      } finally {
        setIsLoadingAI(false);
      }
    },
    [complete]
  );

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Create a new article with AI"
        subtitle="Write a title and click on Generate Content (response can take up to a minute to generate)"
      />
      <Input id="title" label="Title" disabled={false} register={register} errors={errors} required />
      <button
        disabled={title.length < 4 || isLoadingAI || isLoading}
        onClick={() => onGenerateContent(title)}
        className="btn text-white capitalize btn-secondary hover:opacity-80"
      >
        <FaRobot size={20} />
        Generate Content
        {isLoadingAI && <span className="loading loading-dots" />}
      </button>
      <hr className="mb-2" />
      <Input
        textArea
        id="content"
        label="Content"
        disabled={false}
        register={register}
        errors={errors}
        required
        rows={8}
      />
      <ImageUpload value={imageSrc} onChange={value => setCustomValue("imageSrc", value)} />
    </div>
  );
  return (
    <Modal
      title="New Article"
      isOpen={articleModal.isOpen}
      onClose={articleModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Submit"
      loading={isLoading}
      disabled={isLoadingAI || isLoading || !title || !content || !imageSrc}
      body={bodyContent}
    />
  );
};

export default ArticleModal;
