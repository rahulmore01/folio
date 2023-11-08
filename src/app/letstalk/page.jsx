"use client";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import { useState } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { toast } from "react-hot-toast";

const page = () => {
  const phoneNumber = "+91-9309897103";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast.success("Number Copied", { icon: "📋" });
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[74vh] w-screen monu_ex_reg text-gray-100 bg-[#121212]">
        <h1 className=" capitalize text-[28px] bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text">
          contact me to talk
        </h1>
        <div className="flex gap-10 pt-20 text-gray-300">
          <div>
            <button
              className="flex flex-col items-center justify-center gap-8 border rounded-xl hover:bg-zinc-800 py-6 w-72"
              onClick={copyToClipboard}
            >
              <IoMdCall className="w-14 h-14" />
              <p>{phoneNumber}</p>
            </button>
            {copied}
          </div>

          <a
            className="flex flex-col items-center justify-center gap-8 border rounded-xl hover:bg-zinc-800  p-6"
            href="mailto:morerahul620@gmail.com"
          >
            <MdEmail className="w-14 h-14" />
            <p>morerahul620@gmail.com</p>
          </a>

          <a
            className="flex flex-col items-center justify-center gap-8 border rounded-xl hover:bg-zinc-800 w-72"
            href="https://api.whatsapp.com/send?phone=919309897103"
            target="_blank"
          >
            <IoLogoWhatsapp className="w-14 h-14" />
            <p>+91-9309897103</p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
