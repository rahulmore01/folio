// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";

// const Navbar = () => {
//   const [showVerticalMenu, setShowVerticalMenu] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(null); // Initialize as null

//   const handleMenuClick = () => {
//     setShowVerticalMenu(!showVerticalMenu);
//   };

//   useEffect(() => {
//     // Use useEffect to access window.innerWidth on the client side
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);

//       // Update the window width when the window is resized
//       const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   const isMobile = windowWidth && windowWidth < 1200;

//   return (
//     <div>
//       {/* <div className="backdrop-blur-xl flex w-full pl-20 pr-20 justify-between items-center fixed z-50"> */}
//       <div className="backdrop-blur-xl flex w-screen px-6 lg:px-20 justify-between items-center fixed  ">
//         <Image
//           className="h-20 w-20"
//           src="/assets/logo.svg"
//           alt="me"
//           width={100}
//           height={100}
//         />

//         <ul className="monu_ex_reg flex gap-12 text-neutral-400 text-sm  vvs:hidden md:ml-0 md:block md:space-x-6 lg:block lg:space-x-10">
//           <Link className="hover:text-white" href="/ ">
//             Home
//           </Link>
//           <Link className="hover:text-white" href="/projects">
//             Projects
//           </Link>
//           <Link className="hover:text-white" href="/blogs">
//             Blogs
//           </Link>
//         </ul>
//         <div className="monu_ex_reg flex justify-center items-center gap-4">
//           {isMobile ? (
//             <div className="menu-icon" onClick={handleMenuClick}>
//               {showVerticalMenu ? (
//                 <IoClose className="text-white w-6 h-6 cursor-pointer" />
//               ) : (
//                 <FiMenu className="text-white w-6 h-6 cursor-pointer" />
//               )}
//             </div>
//           ) : (
//             <Link
//               href="/letstalk"
//               className="vvs:block vvs: text-sm cursor-pointer text-gray-100 rounded-xl border px-6 py-2 bg-[#414141] hover:bg-white hover-text-[#414141] lg:py-3"
//             >
//               Let's Talk
//             </Link>
//           )}
//         </div>
//       </div>

//       {showVerticalMenu && isMobile && (
//         // {showVerticalMenu && isMobile && (
//         <div className="bg-[#2c2c2c] h-[34vh] w-screen absolute mt-20 ">
//           <ul className="monu_ex_reg flex flex-col justify-center items-center gap-8 text-neutral-400 text-sm pt-10 md:monu_ex_reg">
//             <Link className="hover:text-white" href="/">
//               Home
//             </Link>
//             <Link className="md:hover:text-white" href="/projects">
//               Projects
//             </Link>
//             <Link className="md:hover:text-white" href="/blogs">
//               Blogs
//             </Link>
//             <Link className="md:hover:text-white" href="/letstalk">
//               Let's Talk
//             </Link>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showVerticalMenu, setShowVerticalMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null); // Initialize as null

  const handleMenuClick = () => {
    setShowVerticalMenu(!showVerticalMenu);
  };

  useEffect(() => {
    // Use useEffect to access window.innerWidth on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Update the window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobile = windowWidth && windowWidth < 1200;

  return (
    <div>
      {/* <div className="backdrop-blur-xl flex w-full pl-20 pr-20 justify-between items-center fixed z-50"> */}
      <div className="backdrop-blur-xl flex w-screen px-6 lg:px-20 justify-between items-center fixed  ">
        <Image
          className="h-20 w-20"
          src="/assets/logo.svg"
          alt="me"
          width={100}
          height={100}
        />

        <ul className="monu_ex_reg flex gap-12 text-neutral-400 text-sm  vvs:hidden md:ml-0 md:hidden md:space-x-6 lg:block lg:space-x-10 lg:pl-16">
          <Link className="hover:text-white" href="/ ">
            Home
          </Link>
          <Link className="hover:text-white" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-white" href="/blogs">
            Blogs
          </Link>
        </ul>
        <div className="monu_ex_reg flex justify-center items-center gap-4">
          {isMobile ? (
            <div className="menu-icon" onClick={handleMenuClick}>
              {showVerticalMenu ? (
                <IoClose className="text-white w-6 h-6 cursor-pointer" />
              ) : (
                <FiMenu className="text-white w-6 h-6 cursor-pointer" />
              )}
            </div>
          ) : (
            <Link
              href="/letstalk"
              className="vvs:block vvs: text-sm cursor-pointer text-gray-100 rounded-xl border px-6 py-2 bg-[#414141] hover:bg-white hover-text-[#414141] lg:py-3"
            >
              Let's Talk
            </Link>
          )}
        </div>
      </div>

      {showVerticalMenu && isMobile && (
        // {showVerticalMenu && isMobile && (
        <div className="bg-[#2c2c2c] h-[34vh] w-screen fixed  mt-20 vvs:z-10">
          <ul className="monu_ex_reg flex flex-col justify-center items-center gap-8 text-neutral-400 text-sm pt-10 md:monu_ex_reg">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <Link className="md:hover:text-white" href="/projects">
              Projects
            </Link>
            <Link className="md:hover:text-white" href="/blogs">
              Blogs
            </Link>
            <Link className="md:hover:text-white" href="/letstalk">
              Let's Talk
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
