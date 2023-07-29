"use client";

import { useCallback } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import useArticleModal from "@/hooks/useArticleModal";
import { useRouter } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const articleModal = useArticleModal();

  const onCreateArticle = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    articleModal.onOpen();
  }, [currentUser, loginModal, articleModal]);

  return (
    <nav className="navbar flex-wrap md:flex-nowrap border-b-[1px] shadow-sm">
      <div className="navbar max-w-[1920px] m-auto">
        <div className="navbar-start">
          <span className="btn btn-ghost normal-case text-xl" onClick={() => router.push("/")}>
            TechTales AI
          </span>
        </div>
        <div className="navbar-center hidden md:block">
          <div className="form-control">
            <input type="text" placeholder="Search article" className="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
        <div className="navbar-end">
          <button
            onClick={onCreateArticle}
            className="btn hidden sosmall:block text-white capitalize btn-secondary hover:opacity-80"
          >
            New Article
          </button>
          <div className="dropdown dropdown-end ml-5">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={currentUser?.image ?? "/images/placeholder.jpg"} alt="avatar" width={80} height={80} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {!currentUser && (
                <>
                  <li className="font-semibold">
                    <a onClick={registerModal.onOpen}>Sign Up</a>
                  </li>
                  <li className="font-semibold">
                    <a onClick={loginModal.onOpen}>Log In</a>
                  </li>
                </>
              )}
              {currentUser && (
                <>
                  <li className="pt-2 ml-2 ">Welcome {currentUser.name.split(" ")[0]}</li>
                  <hr className="mt-2 mb-2" />
                  <li className="font-semibold">
                    <a>My Profile</a>
                  </li>
                  <li className="font-semibold">
                    <a onClick={() => router.push("/my-articles")}>My Articles</a>
                  </li>
                  <li className="font-semibold block sosmall:hidden">
                    <a onClick={onCreateArticle}>New Article</a>
                  </li>
                  <li className="font-semibold">
                    <a onClick={() => signOut()}>Log Out</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full block md:hidden px-4 pb-2">
        <div className="form-control">
          <input type="text" placeholder="Search article" className="input input-bordered w-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
