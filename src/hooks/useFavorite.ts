import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useCallback, useMemo } from "react";

import useLoginModal from "./useLoginModal";
import { SafeUser } from "@/types";

interface IUserLike {
  articleId: string;
  like: boolean;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ articleId, like, currentUser }: IUserLike) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const likes = currentUser?.articlesLikes ?? [];
    const disLikes = currentUser?.articlesDislikes ?? [];

    if (likes.includes(articleId) && like) return null;

    if (disLikes.includes(articleId) && !like) return null;

    if (like) return true;

    if (!like) return false;

    return null;
  }, [currentUser, articleId, like]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) return loginModal.onOpen();

    try {
      await axios.post(`/api/likes/${articleId}`, { like: hasLiked });
      router.refresh();
      toast.success("Success");
    } catch (err) {
      toast.error("Error updating like");
    }
  }, [articleId, currentUser, hasLiked, loginModal, router]);

  return { hasLiked, toggleLike };
};

export default useFavorite;
