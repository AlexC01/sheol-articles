"use client";
import Button from "@/components/Button";
import { User, Review } from "@prisma/client";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import useLoginModal from "@/hooks/useLoginModal";
import { SafeUser } from "@/types";
dayjs.extend(customParseFormat);

interface ArticleCommentsProps {
  reviews: Array<Review & { author: User }>;
  articleId: string;
  currentUser?: SafeUser | null;
}

const ArticleComments: React.FC<ArticleCommentsProps> = ({ reviews, articleId, currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const onSubmit = async () => {
    if (content === "") return;
    if (!currentUser) return loginModal.onOpen();
    setIsLoading(true);
    try {
      await axios.post("/api/review", { content, articleId });
      router.refresh();
      setContent("");
      toast.success("Comment posted!");
    } catch (err) {
      toast.error("Error while posting comment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-10">
      <div>
        <h4 className="text-xl font-semibold mb-5">Comments ({reviews.length})</h4>
        <textarea
          className="w-full pt-3 font-light bg-white border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed
            pl-4 border-neutral-300 focus:border-black"
          id="content"
          disabled={isLoading}
          onChange={e => setContent(e.target.value)}
          rows={5}
          placeholder="Write a comment..."
        />
        <Button extraClasses="mt-3" label="Post Comment" loading={isLoading} onClick={onSubmit} />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {reviews.map(review => (
          <div key={review.id} className="text-base rounded-lg border-[1px] shadow-sm mb-3">
            <div className="flex items-center p-4">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full">
                  <Image
                    src={review.author.image ?? "/images/placeholder.jpg"}
                    alt={`Profile picture of ${review.author.name}`}
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row">
                <p className="text-sm text-gray-900 ml-2">{review.author.name}</p>
                <p className="text-xs text-gray-600 sm:ml-3">{dayjs(review.createdAt).format("MMMM DD, YYYY")}</p>
              </div>
            </div>
            <div className="px-6 mb-5">
              <p className="text-gray-500 whitespace-pre-wrap text-justify">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleComments;
