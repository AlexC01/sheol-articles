import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar m-auto max-w-[1920px] ">
      <div className="navbar-start">
        <span className="btn btn-ghost normal-case text-xl">Sheol-Blogs</span>
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
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
