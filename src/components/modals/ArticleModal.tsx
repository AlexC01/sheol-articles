"use client";

import useArticleModal from "@/hooks/useArticleModal";
import Modal from "./Modal";
import Heading from "../Heading";
import ImageUpload from "../inputs/ImageUpload";
import { useState } from "react";

const ArticleModal = () => {
  const [articleForm, setArticleForm] = useState({ image: "" });
  const articleModal = useArticleModal();

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Create a new article with AI" subtitle="Write a title and click on Generate Content" />
      <ImageUpload value={articleForm.image} onChange={value => setArticleForm({ ...articleForm, image: value })} />
    </div>
  );
  return (
    <Modal
      title="New Article"
      isOpen={articleModal.isOpen}
      onClose={articleModal.onClose}
      onSubmit={articleModal.onClose}
      actionLabel="Submit"
      body={bodyContent}
    />
  );
};

export default ArticleModal;
