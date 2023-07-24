"use client";

import useRegisterModal from "@/hooks/useRegisterModal";
import Image from "next/image";

const Navbar = () => {
  const registerModal = useRegisterModal();
  return (
    <nav className="navbar m-auto max-w-[1920px] ">
      <div className="navbar-start">
        <span className="btn btn-ghost normal-case text-xl">Sheol-Articles</span>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input type="text" placeholder="Search article" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn capitalize">New Article</button>
        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src="/user.png" alt="avatar" width={32} height={32} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li onClick={registerModal.onOpen}>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
