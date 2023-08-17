import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 h-auto w-full text-white bg-[#121212]">
      <h1 className="classname">Blogs</h1>
      <BlogCard
        title="UX Designer Burnout: Are You at Risk?"
        para="As UX designers, we’re responsible for creating engaging and intuitive experiences for users. However, at times the job can be demanding and high-pressure, leading to burnout. But what does burnout feel like? Burnout is a state of emotional, physical, and mental exhaustion that results from prolonged stress……."
      />
      <BlogCard
        title="UX Designer Burnout: Are You at Risk?"
        para="As UX designers, we’re responsible for creating engaging and intuitive experiences for users. However, at times the job can be demanding and high-pressure, leading to burnout. But what does burnout feel like? Burnout is a state of emotional, physical, and mental exhaustion that results from prolonged stress……."
      />
      <button className="text-white bg-[#414141] text-base rounded-lg border border-white py-3 px-7 mt-20  monu_ex_reg">
        View all
      </button>
    </div>
  );
};

const BlogCard = ({ title, para }) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div className="flex flex-col gap-3 bg-[#232323] p-12 rounded-3xl">
        <h1 className="text-[30px]  monu_ex_reg">{title}</h1>

        <p className="text-4 mb-[10px] leading-[18px] space_grotesk ">{para}</p>
        <Link className="" href={"blog"}>
          Read more
        </Link>
      </div>
    </>
  );
};

export { Blog, BlogCard };
