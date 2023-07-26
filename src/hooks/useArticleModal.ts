import { create } from "zustand";

interface ArticleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useArticleModal = create<ArticleModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useArticleModal;
