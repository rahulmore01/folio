"use client";
import Link from "next/link";
import React from "react";
const blogLinks = [
  "https://medium.com/@morerahul620/redux-toolkit-in-nextjs-13-with-app-router-b18783b4af9b",
  "https://medium.com/@morerahul620/react-hot-toast-setup-in-next-js-bbf2b5d91c63",
];

const Blog = () => {
  return (
    <>
      {/* <div className="w-screen h-[0.8px] bg-zinc-500"></div> */}
      <div className="flex flex-col justify-center items-center gap-2 h-auto w-screen text-white bg-[#121212]  ">
        {/* <div className="flex flex-col justify-center items-center gap-6 h-auto w-screen text-white bg-[#121212] pt-32 "> */}
        <h1 className="text-xl md:text-[24px] bg-gradient-to-b from-white via-[#dbdbdb] text-transparent bg-clip-text monu_ex_reg md:pb-8">
          {/* <h1 className="text-[32px] bg-gradient-to-b from-white via-[#dbdbdb] text-transparent bg-clip-text monu_ex_reg"> */}
          Blogs
        </h1>

        <BlogCard
          title="Redux Toolkit in Nextjs 13 with App Router"
          para="Using Redux in Next.js is like having a master bartender at a party (your app). It centralizes state management, ensuring all components (guests) get the right data (drinks) without confusion. This keeps your app organised and responsive, making it easier to serve a delightful user experience....."
          blogLink={blogLinks[0]}
        />
        <BlogCard
          title="React-Hot-Toast setup in Nextjs"
          para="Toast notifications are those little messages that briefly appear on a website or app to let you know something happened. Whether it’s a success message, an error alert. In this blog, i’ll show you how to add these toast notifications to your Next.js application using the react-hot-toast library....."
          blogLink={blogLinks[1]}
        />
        <button className="text-gray-200 bg-[#414141] text-[14px] rounded-lg border border-white py-3 px-7 mt-8 lg:mt-12 monu_ex_reg hover:bg-white hover:text-[#414141] ">
          {/* <button className="text-gray-200 bg-[#414141] text-base rounded-lg border border-white py-3 px-7 mt-12  monu_ex_reg hover:bg-white hover:text-[#414141]"> */}
          View all
        </button>
      </div>
    </>
  );
};

const BlogCard = ({ title, para, blogLink }) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div className="flex flex-col items-start gap-4 hover:bg-[#232323] p-12 rounded-3xl w-screen lg:w-[1120px] ">
        {/* <div className="flex flex-col items-start gap-4 hover:bg-[#232323] p-12 rounded-3xl w-[1120px]"> */}
        <h1 className="text-[18px] lg:text-[24px] md:text-[22px]  monu_ex_reg ">
          {title}
        </h1>

        <p className="text-[16px]  md:text-[18px] lg:mb-[18px] lg:leading-[24px] mb-[12px] leading-[21px] space_grotesk text-neutral-400">
          {/* <p className="text-xl mb-[18px] leading-[24px] space_grotesk opacity-50"> */}
          {para}
        </p>
        <Link
          href={blogLink}
          target="_blank"
          className="monu_ex_reg text-neutral-300 text-[16px]lg:text-lg hover:text-neutral-50"
          // className="monu_ex_reg opacity-70 text-lg hover:opacity-100"
        >
          Read more...
        </Link>
      </div>
    </>
  );
};

export { Blog, BlogCard };
