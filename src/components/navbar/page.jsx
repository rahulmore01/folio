"use cliient";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="backdrop-blur-xl flex h-20  w-full pl-20 pr-20 justify-between items-center fixed monu_ex_reg">
        <Image
          className="h-12 w-12"
          src="/assets/Logo.png"
          alt="me"
          width="64"
          height="64"
        />

        <ul className="flex gap-12 text-gray-400 ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Resourses</li>
          <Link className="cursor-pointer" href="/blogs">
            Blogs
          </Link>
          {/* <li className="cursor-pointer">Blogs</li> */}
        </ul>
        <Link
          className="cursor-pointer text-gray-100 rounded-xl border px-8 py-[10px] bg-gray-600"
          href="/login"
        >
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
