import { Blog } from "@/components/blog/page";
import Navbar from "@/components/navbar/page";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="hero bg-[#121212] pb-28">
        <div className="flex items-center justify-center bg-[#121212] pt-32 ">
          <Blog />
        </div>
      </section>
    </>
  );
};

export default page;
